import Navbared from '@/components/thank-navbar'
import { ThankYou } from '@/components/thank-you'
import Script from 'next/script'
import React from 'react'

const page = () => {
  return (
    <div>
      {/* Google Ads Conversion Tracking - Submit Lead Form | Acne LP */}
      <Script id="google-ads-conversion-acne" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {
            'send_to': 'AW-18095694782/EPsmCK_FlPQcEL7H2bRD'
          });
        `}
      </Script>

      <Navbared />
      <ThankYou />
    </div>
  )
}

export default page