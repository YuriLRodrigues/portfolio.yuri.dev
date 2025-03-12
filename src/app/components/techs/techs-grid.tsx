import { use, cache } from 'react'

import { TechCard } from './tech-card'
import { TechsProps } from './techs'

interface TechsGridProps {
  techs: TechsProps[]
  type?: string
}

// Cache the filtering operation
const filterTechs = cache((techs: TechsProps[], type?: string) => {
  if (!type) return techs

  return techs.filter((tech) => {
    if (type === 'front-end') return tech.type === 'front-end' || tech.type === 'fullstack'
    if (type === 'back-end') return tech.type === 'back-end' || tech.type === 'fullstack'
    return tech.type === type
  })
})

export function TechsGrid({ techs, type }: TechsGridProps) {
  const filteredTechs = use(Promise.resolve(filterTechs(techs, type)))

  return (
    <section className="flex w-full flex-wrap items-center justify-center gap-3">
      {filteredTechs.map((tech, index) => (
        <TechCard index={index} icon={tech.icon} name={tech.name} type={tech.type} key={tech.name} />
      ))}
    </section>
  )
}
