'use client'

import { useState, type FormEvent } from 'react'
import { PlusIcon } from '@radix-ui/react-icons'
import { motion } from 'framer-motion'
import { useSession } from 'next-auth/react'

import { createTask } from '../actions/createTask'
import { type CardType, type AddCardProps } from '../types'

function AddCard({ column, setCards }: AddCardProps) {
  const [text, setText] = useState<string>('')
  const [adding, setAdding] = useState<boolean>(false)
  const { data: session } = useSession()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!text.trim().length) return

    if (!session?.user.id) {
      throw new Error('User is not authenticated')
    }

    const userId = session.user.id
    const formData = new FormData(e.target as HTMLFormElement)

    const newCard: CardType = {
      column,
      title: text.trim(),
      taskId: crypto.randomUUID(),
      userId
    }

    setCards((prev) => [...prev, newCard])
    setAdding(false)

    await createTask({ formData, column, userId, taskId: newCard.taskId })
  }

  return (
    <>
      {adding ? (
        <motion.form layout onSubmit={handleSubmit}>
          <textarea
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            className='w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder-violet-300 focus:outline-0'
            name='task'
            placeholder='Add new task...'
            onChange={(e) => setText(e.target.value)}
          />
          <div className='mt-1.5 flex items-center justify-end gap-1.5'>
            <button
              className='px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50'
              type='button'
              onClick={() => setAdding(false)}
            >
              Close
            </button>
            <button
              className='flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5 text-xs text-neutral-950 transition-colors hover:bg-neutral-300'
              type='submit'
            >
              <span>Add</span>
              <PlusIcon />
            </button>
          </div>
        </motion.form>
      ) : (
        <motion.button
          layout
          className='flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50'
          onClick={() => setAdding(true)}
        >
          <span>Add card</span>
          <PlusIcon />
        </motion.button>
      )}
    </>
  )
}

export default AddCard
