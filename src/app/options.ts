import NextAuth, { type NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'

import db from '@/libs/db'

export const options: NextAuthOptions = {
  pages: {
    signIn: '/auth/login'
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'emutis@gmail.com' },
        password: { label: 'Password', type: 'password', placeholder: '********' }
      },
      async authorize(credentials) {
        const userFound = await db.user.findUnique({
          where: { email: credentials?.email }
        })

        if (!userFound) throw new Error('User not found')

        const matchPasswords = await bcrypt.compare(credentials!.password, userFound.password)

        if (!matchPasswords) throw new Error('Wrong password')

        return {
          id: userFound.id,
          name: userFound.userName,
          email: userFound.email
        }
      }
    })
  ],
  callbacks: {
    session({ token, session }) {
      if (token.sub) {
        session.user.id = token.sub
      }

      return session
    }
    // async jwt({ token, user, profile }) {
    //   console.log({ token })

    //   return token
    // }
  }
}

export default NextAuth(options)
