'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ReactNode, useState, useEffect } from 'react'

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <NextThemesProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      {children}
    </NextThemesProvider>
  )
}
