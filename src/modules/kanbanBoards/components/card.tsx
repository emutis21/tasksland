import { motion } from 'framer-motion'

import { type CardProps } from '../types'

import DropIndicator from './dropIndicator'

function Card({ title, taskId, column, handleDragStart }: CardProps) {
  return (
    <>
      <DropIndicator beforeTaskId={taskId} column={column} />
      <motion.div
        layout
        className='cursor-grab rounded border border-neutral-700 p-3 active:cursor-grabbing'
        data-type={column}
        draggable='true'
        layoutId={taskId}
        onDragStart={(e: MouseEvent) =>
          handleDragStart(e as unknown as React.DragEvent, { title, taskId, column, userId: '' })
        }
      >
        <p className='text-sm text-neutral-100'>{title}</p>
      </motion.div>
    </>
  )
}

export default Card
