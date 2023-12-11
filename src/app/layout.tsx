import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { Inter, M_PLUS_Rounded_1c } from 'next/font/google'
import { twMerge } from 'tailwind-merge'

import './globals.css'
import { Footer, Header } from '@/components'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

const mPlusRounded = M_PLUS_Rounded_1c({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-m-plus-rounded',
})

export const metadata: Metadata = {
  title: 'Maurício Romagnollo',
}

export default function RootLayout({ children }: { children: ReactNode }) {
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
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
