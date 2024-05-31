'use server'

import prisma from '@/libs/db'

export async function deleteTask({ formData }: { formData: FormData }) {
  const taskId = formData.get('taskId')

  if (typeof taskId === 'string') {
    await prisma.task.delete({ where: { taskId } })
  } else {
    // eslint-disable-next-line no-console
    console.log('No taskId found in formData')
  }
}
