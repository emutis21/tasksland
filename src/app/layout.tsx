import type { Metadata } from 'next'

import { ViewTransitions } from 'next-view-transitions'
import { Inter as FontSans } from 'next/font/google'
import { getServerSession } from 'next-auth'
import './globals.css'

import { ThemeProvider } from '@/components/theme-provider'
import SessionProvider from '@/components/sessionProvider'
import { Toaster } from '@/components/ui/toaster'
import { Footer } from '@/components/footer'
import Navbar from '@/components/navbar'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'tasksland',
  description: 'A complete task manager'
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getServerSession()

  return (
    <ViewTransitions>
      <html suppressHydrationWarning className='dark' lang='en'>
        <body className={`font-sans antialiased ${fontSans.variable}`}>
          <ThemeProvider
            disableTransitionOnChange
            enableSystem
            attribute='class'
            defaultTheme='system'
          >
            <SessionProvider session={session}>
              <Navbar />
              {children}
              <Footer />
              <Toaster />
            </SessionProvider>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  )
}
