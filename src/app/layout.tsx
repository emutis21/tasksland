import type { Metadata } from 'next'

import { Inter } from 'next/font/google'

import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import Navbar from '@/components/navbar'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'tasksland',
  description: 'A complete task manager'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className='dark' lang='en'>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
