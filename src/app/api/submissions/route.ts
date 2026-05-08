import { NextRequest, NextResponse } from 'next/server';
import * as XLSX from 'xlsx';
import * as fs from 'fs';
import * as path from 'path';

const FILE_PATH = path.join(process.cwd(), 'data', 'submissions.xlsx');
const HEADERS = ['Timestamp', 'Source', 'Name', 'Email', 'Phone', 'Concern', 'Description'];

function ensureFile(): XLSX.WorkBook {
  if (fs.existsSync(FILE_PATH)) {
    return XLSX.readFile(FILE_PATH);
  }
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.aoa_to_sheet([HEADERS]);
  XLSX.utils.book_append_sheet(wb, ws, 'Submissions');
  return wb;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const row = [
      new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      body.source ?? 'Booking Form',
      body.name ?? '',
      body.email ?? '',
      body.phone ?? '',
      body.concern ?? '',
      body.description ?? '',
    ];

    if (!fs.existsSync(path.dirname(FILE_PATH))) {
      fs.mkdirSync(path.dirname(FILE_PATH), { recursive: true });
    }

    const wb = ensureFile();
    const ws = wb.Sheets['Submissions'];
    XLSX.utils.sheet_add_aoa(ws, [row], { origin: -1 });
    XLSX.writeFile(wb, FILE_PATH);

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
