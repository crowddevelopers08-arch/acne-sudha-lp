import { NextRequest, NextResponse } from 'next/server';
import * as XLSX from 'xlsx';
import * as fs from 'fs';
import * as path from 'path';

const FILE_PATH = path.join(process.cwd(), 'data', 'submissions.xlsx');
const HEADERS = ['Timestamp', 'Source', 'Name', 'Email', 'Phone', 'Concern', 'Description', 'Location', 'URL'];

export const runtime = 'nodejs';

type SubmissionBody = {
  source: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  concern: string;
  description: string;
  pageUrl: string;
};

type TelecrmResponse = Record<string, unknown> & {
  synced?: boolean;
  statusCode?: number;
  leadId?: unknown;
  note?: string;
};

function toText(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

function normalizeSubmission(body: Record<string, unknown>): SubmissionBody {
  return {
    source: toText(body.source) || 'Booking Form',
    name: toText(body.name),
    email: toText(body.email),
    phone: toText(body.phone),
    location: toText(body.location),
    concern: toText(body.concern),
    description: toText(body.description),
    pageUrl: toText(body.pageUrl),
  };
}

function ensureFile(): XLSX.WorkBook {
  if (fs.existsSync(FILE_PATH)) {
    return XLSX.readFile(FILE_PATH);
  }

  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.aoa_to_sheet([HEADERS]);
  XLSX.utils.book_append_sheet(wb, ws, 'Submissions');
  return wb;
}

function getWorksheet(wb: XLSX.WorkBook) {
  let ws = wb.Sheets.Submissions;
  if (!ws) {
    ws = XLSX.utils.aoa_to_sheet([HEADERS]);
    XLSX.utils.book_append_sheet(wb, ws, 'Submissions');
    return ws;
  }

  XLSX.utils.sheet_add_aoa(ws, [HEADERS], { origin: 'A1' });

  return ws;
}

async function pushToGAS(body: SubmissionBody) {
  const url = process.env.NEXT_PUBLIC_GAS_URL;
  if (!url) return;

  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  const row = [
    timestamp,
    body.source,
    body.name,
    body.email,
    body.phone,
    body.concern,
    body.description,
    body.location,
    body.pageUrl,
  ];

  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' },
    body: JSON.stringify({
      ...body,
      timestamp,
      city: body.location,
      Location: body.location,
      URL: body.pageUrl,
      headers: HEADERS,
      row,
    }),
  });
}

function normalizePhoneForTeleCRM(phone: string) {
  const digits = phone.replace(/\D/g, '');
  if (digits.length === 10) return `91${digits}`;
  return digits;
}

function isTelecrmConfirmed(data: unknown) {
  if (!data || typeof data !== 'object') return false;

  const record = data as Record<string, unknown>;
  if (Array.isArray(record.modifiedLeadIds) && record.modifiedLeadIds.length > 0) return true;
  if (Array.isArray(record.leadIds) && record.leadIds.length > 0) return true;
  if (record.leadId || record.id || record.LeadID) return true;

  const status = String(record.status || '').toLowerCase();
  if (status === 'created' || status === 'updated' || status === 'success') return true;

  if (String(record.result || '').toLowerCase() === 'accepted') return false;

  return false;
}

async function pushToTeleCRM(body: SubmissionBody) {
  const url = process.env.TELECRM_API_URL;
  const key = process.env.TELECRM_API_KEY;
  if (!url || !key) {
    console.log('TeleCRM not configured, skipping external sync');
    return null;
  }

  const phone = normalizePhoneForTeleCRM(body.phone);
  if (!phone) return null;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  const actions = [
    { type: 'SYSTEM_NOTE', text: `Source: ${body.source || 'Website'}` },
    { type: 'SYSTEM_NOTE', text: `URL: ${body.pageUrl || 'Not specified'}` },
    { type: 'SYSTEM_NOTE', text: `Name: ${body.name || 'Not specified'}` },
    { type: 'SYSTEM_NOTE', text: `Phone: ${body.phone || 'Not specified'}` },
    { type: 'SYSTEM_NOTE', text: `Email: ${body.email || 'Not specified'}` },
    { type: 'SYSTEM_NOTE', text: `Concern: ${body.concern || 'Not specified'}` },
    { type: 'SYSTEM_NOTE', text: `Location: ${body.location || 'Not specified'}` },
    { type: 'SYSTEM_NOTE', text: `Description: ${body.description || 'Not specified'}` },
  ];

  const payload = {
    fields: {
      phone,
      name: body.name,
      email: body.email,
    },
    actions,
  };

  console.log('Sending to TeleCRM:', {
    endpoint: url,
    formName: body.source,
    payloadPreview: {
      ...payload,
      fields: { ...payload.fields, phone: '***REDACTED***' },
    },
  });

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${key}`,
        Accept: 'application/json',
        'X-Client-ID': 'nextjs-website-integration',
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (res.status === 204) {
      console.log('TeleCRM returned 204 No Content');
      return {
        synced: false,
        statusCode: 204,
        result: 'NoContent',
        note: 'TeleCRM returned 204, no body. Cannot confirm lead creation.',
      };
    }

    const text = await res.text();
    console.log('TeleCRM raw response:', text.substring(0, 500));

    if (!text.trim()) {
      console.warn('TeleCRM empty response body');
      return { synced: false, statusCode: res.status, note: 'Empty response from TeleCRM' };
    }

    if (text.trim().startsWith('<!DOCTYPE') || text.trim().startsWith('<html')) {
      console.warn('TeleCRM returned HTML response');
      return {
        synced: false,
        statusCode: res.status,
        note: 'TeleCRM returned HTML error page',
        preview: text.substring(0, 250),
      };
    }

    let data: TelecrmResponse;
    try {
      data = JSON.parse(text) as TelecrmResponse;
    } catch {
      console.warn('TeleCRM returned non-JSON response:', text.substring(0, 300));
      return {
        synced: false,
        statusCode: res.status,
        note: 'Non-JSON response from TeleCRM',
        preview: text.substring(0, 300),
      };
    }

    const confirmed = res.ok && isTelecrmConfirmed(data);

    console.log('TeleCRM response parsed:', {
      status: res.status,
      ok: res.ok,
      confirmed,
    });

    return {
      ...data,
      synced: confirmed,
      statusCode: res.status,
      leadId: data.leadId || data.id || data.LeadID || null,
      note: confirmed
        ? 'TeleCRM lead confirmed'
        : 'TeleCRM accepted request but did not confirm lead creation.',
    };
  } catch (err) {
    clearTimeout(timeout);
    const message = err instanceof Error ? err.message : String(err);
    console.warn('TeleCRM submission failed:', { message });
    return { synced: false, note: 'TeleCRM fetch failed', error: message };
  }
}

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.json();
    const body = normalizeSubmission(rawBody);
    const row = [
      new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      body.source,
      body.name,
      body.email,
      body.phone,
      body.concern,
      body.description,
      body.location,
      body.pageUrl,
    ];

    try {
      if (!fs.existsSync(path.dirname(FILE_PATH))) {
        fs.mkdirSync(path.dirname(FILE_PATH), { recursive: true });
      }
      const wb = ensureFile();
      const ws = getWorksheet(wb);
      XLSX.utils.sheet_add_aoa(ws, [row], { origin: -1 });
      XLSX.writeFile(wb, FILE_PATH);
    } catch (xlsxErr) {
      console.warn('Local Excel save skipped:', (xlsxErr as Error).message);
    }

    const results = await Promise.allSettled([pushToGAS(body), pushToTeleCRM(body)]);

    results.forEach((result) => {
      if (result.status === 'rejected') {
        console.warn('Submission integration skipped:', result.reason);
      }
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Submission error:', err);
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const wb = ensureFile();
    const buffer = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' });

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'Content-Disposition': `attachment; filename="submissions_${Date.now()}.xlsx"`,
      },
    });
  } catch (err) {
    console.error('Download error:', err);
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}
