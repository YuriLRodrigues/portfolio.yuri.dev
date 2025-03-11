import { ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface TimelineBadgeProps {
  children: ReactNode
  className?: string
}

export function TimelineBadge({ children, className }: TimelineBadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium',
        'bg-primary/10 text-primary hover:bg-primary/15 transition-colors',
        'border-primary/20 border',
        className,
      )}
    >
      {children}
    </div>
  )
}
