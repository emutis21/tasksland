import { type DropIndicatorProps } from '../types'

function DropIndicator({ beforeTaskId, column }: DropIndicatorProps) {
  return (
    <div
      className='my-0.5 h-0.5 w-full bg-violet-400 opacity-0'
      data-before={beforeTaskId ?? '-1'}
      data-column={column}
    />
  )
}

export default DropIndicator
