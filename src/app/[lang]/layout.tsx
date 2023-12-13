import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { Inter, M_PLUS_Rounded_1c } from 'next/font/google'
import { twMerge } from 'tailwind-merge'

import '../globals.css'
import { Footer, Header } from '@/components'
import { Locale } from '@/config'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

const mPlusRounded = M_PLUS_Rounded_1c({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  adjustFontFallback: false,
  variable: '--font-m-plus-rounded',
})

export const metadata: Metadata = {
  title: 'Maurício Romagnollo',
}

type RootLayoutProps = {
  children: ReactNode
  params: {
    lang: Locale
  }
}

export default function RootLayout({ children, params: { lang } }: RootLayoutProps) {
  return (
    <html className={twMerge(inter.variable, mPlusRounded.variable)} lang="pt">
      {/* <head>
        <link rel="icon" href="/favicon.ico" sizes='any' />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head> */}
      <body className='bg-background-light dark:bg-background-dark text-black dark:text-gray antialiased'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
