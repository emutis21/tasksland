'use server'

import { type Column } from '@prisma/client'

import prisma from '@/libs/db'

import { type ColumnType } from '../types'

export async function createTask({
  formData,
  column,
  userId,
  taskId
}: {
  formData: FormData
  column: ColumnType
  userId: string
  taskId: string
}) {
  const newTask = formData.get('task')

  if (typeof newTask === 'string' && newTask.trim()) {
    await prisma.task.create({
      data: {
        taskId: taskId.toString(),
        title: newTask.toString(),
        column: column.toLowerCase() as Column,
        user: {
          connect: {
            id: userId
          }
        }
      }
    })
  }
}
