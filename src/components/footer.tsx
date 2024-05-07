import React from 'react'

import { cn } from '@/lib/utils'

export function Footer() {
  return (
    <footer
      className={cn(
        '[grid-column:full-width]',
        'md:[grid-column:breakout]',
        '[grid-row:content-main-end]',
        'text-center',
        'grid',
        'place-items-center',
        'm-2'
      )}
    >
      <p className='text-center'>Con ❤️ por Esteban Mutis</p>
    </footer>
  )
}
