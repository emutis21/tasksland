import { type Dispatch, type SetStateAction } from 'react'

export interface ColumnProps {
  title: string
  headingColor: string
  cards: CardType[]
  column: ColumnType
  setCards: Dispatch<SetStateAction<CardType[]>>
}

export type HandleDragStart = (e: React.DragEvent, card: CardType) => void

export type CardProps = CardType & {
  handleDragStart: HandleDragStart
}

export interface DropIndicatorProps {
  beforeTaskId: string | null
  column: string
}

export interface AddCardProps {
  column: ColumnType
  setCards: Dispatch<SetStateAction<CardType[]>>
}

export type ColumnType = 'backlog' | 'todo' | 'doing' | 'done'

export interface CardType {
  title: string
  taskId: string
  column: ColumnType
  userId: string
}
