'use client'

import Image from 'next/image'
import { useState, useCallback, useEffect } from 'react'

import { Icon } from '@/components/icon'
import { Button } from '@/components/ui/button'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Title } from '@/components/ui/title'

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { type Project, projects } from './projects.data'

const ProjectImageCarousel = ({ images }: { images: string[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div className="relative min-w-0 flex-[0_0_100%]" key={index}>
              <Image
                width={400}
                height={300}
                src={src || '/placeholder.svg'}
                alt={`Project image ${index + 1}`}
                className="aspect-square h-[250px] max-h-full w-full max-w-full object-cover object-center md:h-[300px]"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        className="bg-background/80 hover:bg-background absolute top-1/2 left-2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full shadow-md transition-colors disabled:hidden"
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        className="bg-background/80 hover:bg-background absolute top-1/2 right-2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full shadow-md transition-colors disabled:hidden"
        onClick={scrollNext}
        disabled={!nextBtnEnabled}
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  )
}

// Project card component
const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_32%]">
      <div className="bg-card flex h-full flex-col overflow-hidden rounded-xl shadow-lg dark:shadow-white/10">
        <ProjectImageCarousel images={project.images} />
        <div className="flex flex-1 flex-col space-y-2 p-6">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <div className="flex flex-col pr-2">
            <p className="text-muted-foreground mt-2 line-clamp-3">{project.description}</p>
            {/* <Button effect="underline" variant="link" className="ml-auto p-0 text-xs">
              <Link className="w-full" href={`/projects/${project.id}`}>
                Mais detalhes
              </Link>
            </Button> */}
          </div>

          <ScrollArea className="max-h-12 w-full pb-3">
            <div className="grid max-h-12 overflow-y-hidden">
              <div className="flex w-max flex-nowrap space-x-2">{project.technologies}</div>
              <ScrollBar orientation="horizontal" />
            </div>
          </ScrollArea>

          <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
            <a target="_blank" href={project.links.github}>
              <Button
                className="flex h-full w-full cursor-pointer items-center justify-center gap-2 p-2 md:w-32"
                effect="ringHover"
              >
                Repositório
                <Icon name="Github" className="size-8" />
              </Button>
            </a>
            <a target="_blank" href={project.links.website} className="">
              <Button
                className="flex h-full w-full cursor-pointer items-center justify-center gap-2 p-2 md:w-32"
                effect="shine"
              >
                Deploy
                <Icon name="Link" className="size-8" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

// Main projects carousel
export default function ProjectsShowcase() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    dragFree: false,
    watchDrag: false,
  })

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <section className="py-12 md:px-6 lg:px-8" id="projects">
      <div className="mx-auto w-full space-y-8">
        <Title>Projetos</Title>

        <div className="relative space-y-4">
          <div className="overflow-hidden p-2" ref={emblaRef}>
            <div className="flex gap-4">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <button
              className="bg-primary/10 hover:bg-primary/20 flex h-10 w-10 items-center justify-center rounded-full transition-colors disabled:opacity-50"
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              className="bg-primary/10 hover:bg-primary/20 flex h-10 w-10 items-center justify-center rounded-full transition-colors disabled:opacity-50"
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
