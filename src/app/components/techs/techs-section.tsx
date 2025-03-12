import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Title } from '@/components/ui/title'

import { techs } from './techs'
import { TechsGrid } from './techs-grid'

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
          <TechsGrid techs={techs} />
        </TabsContent>
        <TabsContent value="front-end">
          <TechsGrid techs={techs} type="front-end" />
        </TabsContent>
        <TabsContent value="back-end">
          <TechsGrid techs={techs} type="back-end" />
        </TabsContent>
        <TabsContent value="tools">
          <TechsGrid techs={techs} type="tools" />
        </TabsContent>
      </Tabs>
    </section>
  )
}
