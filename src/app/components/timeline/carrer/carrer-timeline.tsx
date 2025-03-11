'use client'

import { useEffect, useRef } from 'react'

import { Icon } from '@/components/icon'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

import { cn } from '@/lib/utils'
import { motion, useInView, useAnimation } from 'framer-motion'

import { careerTimelineData } from './carrer-data'
import { cardBackgroundColors, contractColors } from './mapping'

export const CareerTimeline = () => {
  const controls = useAnimation()
  const timelineRef = useRef(null)
  const isInView = useInView(timelineRef, { once: false, amount: 0.1 })

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])

  return (
    <motion.div
      ref={timelineRef}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2,
          },
        },
      }}
      className="py-10"
      id="timeline"
    >
      <div className="relative mx-auto max-w-6xl">
        {/* Center line */}
        <div className="via-primary absolute left-4 h-full w-1 transform rounded-full bg-gradient-to-b from-gray-200 to-gray-200 lg:left-1/2 lg:-translate-x-1/2 dark:from-zinc-800 dark:to-zinc-800" />

        {careerTimelineData.map((item, index) => {
          const isEven = index % 2 === 0
          const duration =
            item.endDate === 'Atual' ? `${item.startDate} - Presente` : `${item.startDate} - ${item.endDate}`

          return (
            <div
              key={index}
              className={cn(
                'relative mb-12 flex items-start justify-start pl-12 lg:mb-24 lg:items-center lg:justify-center lg:pl-0',
                index === careerTimelineData.length - 1 && 'mb-0',
              )}
            >
              {/* Timeline item */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className={cn(
                  'relative',
                  'w-full px-4 lg:w-5/12 lg:px-0',
                  isEven ? 'lg:mr-auto lg:pr-10' : 'lg:ml-auto lg:pl-10',
                )}
              >
                {/* Content card */}
                <div
                  className={cn(
                    'bg-background border-background rounded-lg border-2 p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:shadow-white/10',
                    cardBackgroundColors[item.type],
                  )}
                >
                  {/* Header */}
                  <div className="mb-4">
                    <div>
                      <div className="flex items-center justify-between">
                        <div
                          className={cn(
                            'mb-2 inline-block rounded-full border px-3 py-1 text-xs font-medium',
                            contractColors[item.type],
                          )}
                        >
                          {item.type}
                        </div>
                        <div className="text-primary flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium">
                          <Icon name="Calendar" className="h-3.5 w-3.5" />
                          <span>{duration}</span>
                        </div>
                      </div>
                      <h3 className="flex items-center gap-2 text-xl font-bold">
                        <span className="bg-primary/10 rounded-full p-2">
                          <Icon name={item.icon} className="text-primary h-5 w-5" />
                        </span>
                        {item.position}
                      </h3>
                      <h4 className="mt-1 text-lg font-semibold text-gray-700 dark:text-neutral-400">{item.company}</h4>
                      <div className="mt-1 flex items-center gap-1 text-sm text-gray-500 dark:text-neutral-400">
                        <Icon name="MapPin" className="h-3.5 w-3.5" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="border-primary/30 mb-4 border-l-4 pl-3 text-gray-700 italic dark:text-neutral-400">
                    {item.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h5 className="mb-2 flex items-center gap-1 text-sm font-semibold">
                      <Icon name="Cpu" className="h-4 w-4" />
                      Tecnologias
                    </h5>
                    <ScrollArea className="max-h-12 w-full pb-3">
                      <div className="grid max-h-12 overflow-y-hidden">
                        <div className="flex w-max flex-nowrap space-x-2">{item.technologies}</div>
                        <ScrollBar orientation="horizontal" />
                      </div>
                    </ScrollArea>
                  </div>

                  {/* Responsibilities */}
                  <div className="mb-4">
                    <h5 className="mb-2 flex items-center gap-1 text-sm font-semibold">
                      <Icon name="ListChecks" className="h-4 w-4" />
                      Responsabilidades
                    </h5>
                    <ul className="list-disc space-y-1 pl-5 text-sm">
                      {item.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex}>{resp}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Projects */}
                  <div>
                    <h5 className="mb-2 flex items-center gap-1 text-sm font-semibold">
                      <Icon name="Folder" className="h-4 w-4" />
                      Projetos
                    </h5>
                    <Accordion type="single" collapsible className="w-full">
                      {item?.projects?.map((project, projectIndex) => (
                        <AccordionItem key={projectIndex} value={`project-${projectIndex}`} className="border-b-0">
                          <AccordionTrigger className="py-2 text-sm font-medium hover:no-underline">
                            {project.name}
                          </AccordionTrigger>
                          <AccordionContent className="text-sm">
                            <p className="mb-2">{project.description}</p>

                            {project?.technologies && project?.technologies?.length > 0 && (
                              <div className="mb-2">
                                <span className="text-xs font-medium">Tecnologias:</span>
                                <div className="mt-1 flex flex-wrap gap-1">
                                  {project.technologies.map((tech, techIndex) => (
                                    <Badge key={techIndex} variant="secondary" className="text-xs">
                                      {tech}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )}

                            <div>
                              <span className="text-xs font-medium">Conquistas:</span>
                              <ul className="mt-1 list-disc space-y-1 pl-5 text-xs">
                                {project.achievements.map((achievement, achievementIndex) => (
                                  <li key={achievementIndex}>{achievement}</li>
                                ))}
                              </ul>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>

                {/* Arrow pointing to timeline */}
                <div
                  className={cn(
                    'absolute top-10 hidden h-0 w-0 border-8 border-solid lg:block',
                    isEven
                      ? 'right-2 border-r-0 border-t-transparent border-r-gray-200 border-b-transparent border-l-transparent'
                      : 'left-2 border-l-0 border-t-transparent border-r-transparent border-b-transparent border-l-gray-200',
                  )}
                ></div>
              </motion.div>

              {/* Center dot */}
              <motion.div
                variants={{
                  hidden: { scale: 0 },
                  visible: { scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } },
                }}
                whileHover={{ scale: 1.2 }}
                className="absolute left-4 z-10 -translate-x-1/2 transform lg:left-1/2 lg:-translate-x-1/2"
              >
                <div className="border-primary bg-background flex h-12 w-12 items-center justify-center rounded-full border-4">
                  <Icon name="Briefcase" className="text-primary h-6 w-6" />
                </div>
              </motion.div>

              {/* Year badge */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
                }}
                className={cn(
                  'bg-primary absolute flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium text-white dark:text-black',
                  'hidden lg:flex',
                  isEven ? 'top-10 left-[52%]' : 'top-10 right-[52%]',
                )}
              >
                {item.startDate.split(' ')[1]}
                {item.endDate && ' - ' + item.endDate.split(' ')[1]}
              </motion.div>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}
