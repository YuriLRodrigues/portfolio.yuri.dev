import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'

import { AnimatedNavbar } from '@/components/layout/navbar/animated-navbar'

import { ThemeSwitch } from '../theme-switch'
import { AnimatedNavbarSkeleton } from './navbar/animated-navbar-skeleton'
import { MobileNavbar } from './navbar/mobile-navbar'

export const Header = () => {
  return (
    <header className="bg-background fixed z-[999] flex w-full items-center justify-between gap-x-4 px-6 py-2 lg:px-8">
      <Link href="/">
        <Image
          src="/yr-logo.png"
          className="aspect-square size-8 object-center"
          alt="portfolio-logo"
          width={100}
          height={100}
        />
      </Link>
      <Suspense fallback={<AnimatedNavbarSkeleton />}>
        <AnimatedNavbar />
      </Suspense>
      <ThemeSwitch className="hidden md:flex" />
      <MobileNavbar />
    </header>
  )
}
