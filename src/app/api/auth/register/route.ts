import { NextResponse } from 'next/server'
import * as bcrypt from 'bcrypt'

import db from '@/libs/db'

interface Data {
  email: string
  password: string
  userName: string
}

export async function POST(request: Request) {
  try {
    const data: Data = await request.json()

    const userFound = await db.user.findUnique({
      where: {
        userName: data.userName
      }
    })

    const emailFound = await db.user.findUnique({
      where: {
        email: data.email
      }
    })

    if (userFound) {
      return NextResponse.json(
        {
          message: 'User already exists'
        },
        {
          status: 400
        }
      )
    }

    if (emailFound) {
      return NextResponse.json(
        {
          message: 'Email already exists'
        },
        {
          status: 400
        }
      )
    }

    const hashedPassword = await bcrypt.hash(data.password, 10)

    const newUser = await db.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
        userName: data.userName
      }
    })

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...user } = newUser

    return NextResponse.json(user)
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: `An error occurred ${error.message}`
        },
        {
          status: 500
        }
      )
    }

    return NextResponse.json(
      {
        message: 'An unknown error occurred'
      },
      {
        status: 500
      }
    )
  }
}
