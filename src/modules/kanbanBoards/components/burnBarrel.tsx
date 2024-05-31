import { CheckIcon, TrashIcon } from '@radix-ui/react-icons'
import {
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type DragEvent,
  type SetStateAction
} from 'react'

import { deleteTask } from '../actions/deleteTask'
import { type CardType } from '../types'

function BurnBarrel({ setCards }: { setCards: Dispatch<SetStateAction<CardType[]>> }) {
  const [active, setActive] = useState(false)
  const [cardId, setCardId] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault()
    setActive(true)
  }

  const handleDragLeave = () => {
    setActive(false)
  }

  const handleDrop = (e: DragEvent) => {
    e.preventDefault()
    const droppedCardId = e.dataTransfer.getData('cardId')

    setCardId(droppedCardId)
    setActive(false)
  }

  useEffect(() => {
    const deleteCard = async (cardId: string) => {
      setCards((prevCards) => prevCards.filter((card) => card.taskId !== cardId))

      if (formRef.current) {
        const formData = new FormData(formRef.current)

        try {
          await deleteTask({ formData })
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('Error deleting task:', error)
        }
      }
    }

    if (cardId) {
      void deleteCard(cardId)
    }
  }, [cardId, setCards])

  return (
    <form
      ref={formRef}
      className={`mt-10 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl ${
        active
          ? 'border-red-800 bg-red-800/20 text-red-500'
          : 'border-neutral-500 bg-neutral-500/20 text-neutral-500'
      }`}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <input readOnly name='taskId' type='hidden' value={cardId ?? ''} />
      {active ? <CheckIcon className='animate-bounce' /> : <TrashIcon />}
    </form>
  )
}

export default BurnBarrel
