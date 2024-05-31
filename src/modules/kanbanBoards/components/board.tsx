'use client'

import { useState } from 'react'

import { type CardType } from '../types'
import { DEFAULT_CARDS } from '../moks'

import BurnBarrel from './burnBarrel'
import Column from './column'

function Board({ tasks }: { tasks?: CardType[] }) {
  const [cards, setCards] = useState<CardType[]>(tasks ?? DEFAULT_CARDS)

  return (
    <div className='flex h-full w-full gap-3 overflow-x-scroll px-4 py-12 [scrollbar-color:_var(--primary-color)_var(--primary-dark)] [scrollbar-width:thin]'>
      <Column
        cards={cards}
        column='backlog'
        headingColor='text-neutral-500'
        setCards={setCards}
        title='Limbo'
      />
      <Column
        cards={cards}
        column='todo'
        headingColor='text-yellow-200'
        setCards={setCards}
        title='Por hacer'
      />
      <Column
        cards={cards}
        column='doing'
        headingColor='text-blue-200'
        setCards={setCards}
        title='En proceso'
      />
      <Column
        cards={cards}
        column='done'
        headingColor='text-emerald-200'
        setCards={setCards}
        title='Hecho'
      />
      <BurnBarrel setCards={setCards} />
    </div>
  )
}

export default Board
