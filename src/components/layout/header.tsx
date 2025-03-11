import Image from 'next/image'
import Link from 'next/link'

import { AnimatedNavbar, Tabs } from '@/components/layout/navbar/animated-navbar'

import { ThemeSwitch } from '../theme-switch'
import { MobileNavbar } from './navbar/mobile-navbar'

const tabs: Tabs[] = [
  {
    title: 'Início',
    href: '#home',
    icon: 'House',
  },
  {
    title: 'Linha do tempo',
    href: '#timeline',
    icon: 'Timer',
  },
  {
    title: 'Tecnologias',
    href: '#techs',
    icon: 'Crosshair',
  },
  {
    title: 'Diferenciais',
    href: '#feature',
    icon: 'Shapes',
  },
  {
    title: 'Projetos',
    href: '#projects',
    icon: 'Blocks',
  },
]

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
      <AnimatedNavbar tabs={tabs} />
      <ThemeSwitch className="hidden md:flex" />
      <MobileNavbar />
    </header>
  )
}
