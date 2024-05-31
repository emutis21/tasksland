import React from 'react'

import { cn } from '@/lib/utils'

import { ModeToggle } from './ui/theme-toggle-button'

export function Footer() {
  return (
    <footer
      className={cn(
        'relative my-2 grid w-full place-items-center text-center [grid-column:full-width] [grid-row:content-main-end]  md:[grid-column:breakout]'
      )}
    >
      <p className='text-center'>Con ❤️ por Esteban Mutis</p>
      <div className='absolute right-0'>
        <ModeToggle />
      </div>
    </footer>
  )
}
