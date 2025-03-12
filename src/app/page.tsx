import { FeatureCarousel } from './components/features'
import { Hero } from './components/hero'
import Marquee from './components/marquee'
import ProjectsShowcase from './components/projects-showcase/projects-showcase'
import { TechsSection } from './components/techs/techs-section'
import { TimelineTabs } from './components/timeline'
import { Particles } from '@/components/ui/particles'

export default function Home() {
  return (
    <main className="bg-background relative mx-auto min-h-screen max-w-[1920px] overflow-hidden">
      <Particles className="absolute inset-0" quantity={300} ease={120} refresh />
      <section className="relative z-[99] space-y-10 px-6 lg:px-8">
        <Hero />
        <TimelineTabs />
        <TechsSection />
        <FeatureCarousel />
        <ProjectsShowcase />
        <Marquee />
      </section>
    </main>
  )
}
