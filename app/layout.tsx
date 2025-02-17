'use client'
import './globals.css'
import React from 'react'
import Script from 'next/script'
import { pageview } from '@/lib/gtag'
import { usePathname } from 'next/navigation'
import { ThemeProvider } from './components/ThemeProvider'

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  React.useEffect(() => {
    pageview(pathname)
  }, [pathname])

  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <Script
          strategy='afterInteractive'
          src={`https://www.googletagmanager.com/gtag/js?id=G-TFSC30W1E7`}
        />
        <Script
          id='google-analytics'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', ${JSON.stringify(GA_TRACKING_ID)});
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
