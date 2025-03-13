import React from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Title } from '@/components/ui/title'

import { techs } from './techs'

const TechsGridLazy = React.lazy(() => import('./techs-grid'))

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
          <TechsGridLazy techs={techs} />
        </TabsContent>
        <TabsContent value="front-end">
          <TechsGridLazy techs={techs} type="front-end" />
        </TabsContent>
        <TabsContent value="back-end">
          <TechsGridLazy techs={techs} type="back-end" />
        </TabsContent>
        <TabsContent value="tools">
          <TechsGridLazy techs={techs} type="tools" />
        </TabsContent>
      </Tabs>
    </section>
  )
}
