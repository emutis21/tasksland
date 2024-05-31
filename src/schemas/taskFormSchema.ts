import { Column } from '@prisma/client'
import { z } from 'zod'

export const TaskFormSchema = z.object({
  title: z.string().min(1, { message: 'Title is required' }),
  userId: z.string().min(1, { message: 'User is required' }),
  column: z.nativeEnum(Column, { message: 'Invalid column' })
})
