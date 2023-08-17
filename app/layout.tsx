import './globals.css'
import type { Metadata } from 'next'
import { Racing_Sans_One } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react';


const kanit = Racing_Sans_One( {
  subsets: ['latin'],
  weight: '400'
} )

export const metadata: Metadata = {
  title: 'Yeah, Exactly Podcast',
  description: 'Two Gabbing Gays',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <head>
        {/* Add the Google Analytics tag script here */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-6B7TYCS6EP"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6B7TYCS6EP');
            `,
          }}
        /> */}

    <Script src="https://www.googletagmanager.com/gtag/js?id=G-6B7TYCS6EP" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-6B7TYCS6EPD');
        `}
      </Script>
      </head>
      <body 
      className={kanit.className}>
        {children}

        <Analytics />
      </body>
    </html>
  )
}
