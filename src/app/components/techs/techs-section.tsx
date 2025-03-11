import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Title } from '@/components/ui/title'

import { TechCard } from './tech-card'
import { techs } from './techs'

export const TechsSection = () => {
  return (
    <section className="mx-auto flex min-h-[50vh] flex-col items-center justify-center space-y-8" id="techs">
      <Title>Tecnologias</Title>
      <Tabs defaultValue="all" className="space-y-4 p-2">
        <TabsList className="relative mx-auto h-auto *:cursor-pointer">
          <TabsTrigger value="all">Todas</TabsTrigger>
          <TabsTrigger value="front-end">Front-End</TabsTrigger>
          <TabsTrigger value="back-end">Back-End</TabsTrigger>
          <TabsTrigger value="tools">Ferramentas</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <section className="flex w-full flex-wrap items-center justify-center gap-3">
            {techs.map((tech, index) => (
              <TechCard index={index} icon={tech.icon} name={tech.name} type={tech.type} key={tech.name} />
            ))}
          </section>
        </TabsContent>
        <TabsContent value="front-end">
          <section className="flex w-full flex-wrap items-center justify-center gap-3">
            {techs
              .filter((tech) => tech.type === 'front-end' || tech.type === 'fullstack')
              .map((tech, index) => (
                <TechCard index={index} icon={tech.icon} name={tech.name} type={tech.type} key={tech.name} />
              ))}
          </section>
        </TabsContent>
        <TabsContent value="back-end">
          <section className="flex w-full flex-wrap items-center justify-center gap-3">
            {techs
              .filter((tech) => tech.type === 'back-end' || tech.type === 'fullstack')
              .map((tech, index) => (
                <TechCard index={index} icon={tech.icon} name={tech.name} type={tech.type} key={tech.name} />
              ))}
          </section>
        </TabsContent>
        <TabsContent value="tools">
          <section className="flex w-full flex-wrap items-center justify-center gap-3">
            {techs
              .filter((tech) => tech.type === 'tools')
              .map((tech, index) => (
                <TechCard index={index} icon={tech.icon} name={tech.name} type={tech.type} key={tech.name} />
              ))}
          </section>
        </TabsContent>
      </Tabs>
    </section>
  )
}
