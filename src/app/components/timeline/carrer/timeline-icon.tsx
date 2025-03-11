import { ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface TimelineIconProps {
  children: ReactNode
  className?: string
}

export function TimelineIcon({ children, className }: TimelineIconProps) {
  return <div className={cn('flex h-4 w-4 items-center justify-center', className)}>{children}</div>
}
