import prisma from '@/libs/db'

import Board from '../components/board'
import { type CardType } from '../types'

export async function CustomKanban() {
  const tasks: CardType[] = await prisma.task.findMany()

  return (
    <div className='kanban w-full bg-[var(--copy)] text-neutral-50'>
      <Board tasks={tasks} />
    </div>
  )
}
