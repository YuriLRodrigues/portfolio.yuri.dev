import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Title } from '@/components/ui/title'

import { AcademicTimeline } from './academic'
import { CareerTimeline } from './carrer'
import { TimelineResume } from './timeline-resume'

export const TimelineTabs = () => {
  return (
    <div className="w-full space-y-8 pt-18" id="timeline">
      <Title>Linha do tempo</Title>
      <Tabs defaultValue="resume" className="w-full space-y-4 *:mx-auto *:w-full">
        <TabsList className="max-w-fit">
          <TabsTrigger value="resume">Resumo</TabsTrigger>
          <TabsTrigger value="carrer">Profissional</TabsTrigger>
          <TabsTrigger value="academic">Acadêmica</TabsTrigger>
        </TabsList>
        <TabsContent value="resume">
          <TimelineResume />
        </TabsContent>
        <TabsContent value="carrer">
          <CareerTimeline />
        </TabsContent>
        <TabsContent value="academic">
          <AcademicTimeline />
        </TabsContent>
      </Tabs>
    </div>
  )
}
