'use client'

import { useTheme } from 'next-themes'
import { ComponentProps, useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'

import { cn } from '@/lib/utils'

import { Icon } from '../icon'

type ThemeSwitchProps = ComponentProps<'button'>

export function ThemeSwitch({ className }: ThemeSwitchProps) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
      className={cn('cursor-pointer', className)}
    >
      {theme === 'dark' ? (
        <Icon name="Sun" className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Icon name="Moon" className="h-[1.2rem] w-[1.2rem]" />
      )}
    </Button>
  )
}
