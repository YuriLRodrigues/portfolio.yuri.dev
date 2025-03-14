import { ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface ProjectIconProps {
  children: ReactNode
  className?: string
}

export function ProjectIcon({ children, className }: ProjectIconProps) {
  return <div className={cn('flex h-4 w-4 items-center justify-center', className)}>{children}</div>
}
