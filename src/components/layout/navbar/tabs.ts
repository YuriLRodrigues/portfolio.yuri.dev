import { icons } from 'lucide-react'

export type TabsProps = {
  title: string
  href: string
  icon: keyof typeof icons
  sectionId?: string
}

export const tabs: TabsProps[] = [
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
