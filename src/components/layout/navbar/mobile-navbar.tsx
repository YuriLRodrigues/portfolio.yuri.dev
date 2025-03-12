'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { ThemeSwitch } from '@/components/theme-switch'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

import { Blocks, Crosshair, HomeIcon as House, Menu, Shapes, Timer } from 'lucide-react'

import { tabs } from './tabs'

const IconComponent = ({ iconName }: { iconName: string }) => {
  switch (iconName) {
    case 'House':
      return <House className="h-5 w-5" />
    case 'Timer':
      return <Timer className="h-5 w-5" />
    case 'Crosshair':
      return <Crosshair className="h-5 w-5" />
    case 'Shapes':
      return <Shapes className="h-5 w-5" />
    case 'Blocks':
      return <Blocks className="h-5 w-5" />
    default:
      return null
  }
}

export const MobileNavbar = () => {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="hover:bg-accent block rounded-md p-2 md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="z-[9999] w-[300px] p-0 sm:w-[350px]">
        <SheetHeader className="border-b pt-10">
          <SheetTitle className="flex items-center">
            <Link href="/" onClick={handleLinkClick}>
              <Image
                src="/yr-logo.png"
                className="aspect-square size-8 object-center"
                alt="portfolio-logo"
                width={100}
                height={100}
              />
            </Link>
            <div className="ml-auto">
              <ThemeSwitch />
            </div>
          </SheetTitle>
        </SheetHeader>
        <div className="px-2 py-6">
          <nav>
            <ul className="space-y-2">
              {tabs.map((tab) => (
                <li key={tab.href}>
                  <Link
                    href={tab.href}
                    onClick={handleLinkClick}
                    className="text-foreground hover:bg-accent flex items-center gap-3 rounded-lg px-4 py-3 transition-colors"
                  >
                    <span className="bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded-md">
                      <IconComponent iconName={tab.icon} />
                    </span>
                    <span className="font-medium">{tab.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="text-muted-foreground absolute right-0 bottom-8 left-0 text-center text-sm">
          © {new Date().getFullYear()} Portfolio
        </div>
      </SheetContent>
    </Sheet>
  )
}
