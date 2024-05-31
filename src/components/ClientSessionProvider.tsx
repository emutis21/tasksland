// src/components/ClientSessionProvider.tsx
'use client'

import type { Session } from 'next-auth'

import { SessionProvider } from 'next-auth/react'

interface ClientSessionProviderProps {
  children: React.ReactNode
  session?: Session | null
}

function ClientSessionProvider({ children, session }: ClientSessionProviderProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>
}

export default ClientSessionProvider
