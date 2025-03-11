'use client'
import { useEffect, useRef } from 'react'

import { Icon } from '@/components/icon'

import { cn } from '@/lib/utils'
import { motion, useInView, useAnimation } from 'framer-motion'

import { academicTimelineData, type AcademicTimelineProps } from './academic-data'
import { dateColors, statusColors, typeColors, typeLabels } from './mapping'

const CourseIcon = ({ icon }: { icon: AcademicTimelineProps['icon'] }) => {
  switch (icon) {
    case 'code':
      return <Icon name="Code" className="h-5 w-5" />
    case 'degree':
      return <Icon name="GraduationCap" className="h-5 w-5" />
    case 'certificate':
      return <Icon name="Award" className="h-5 w-5" />
    default:
      return <Icon name="BookOpen" className="h-5 w-5" />
  }
}

const StatusIcon = ({ status }: { status: AcademicTimelineProps['status'] }) => {
  switch (status) {
    case 'completed':
      return <Icon name="CircleCheck" className="h-6 w-6 text-emerald-500" />
    case 'ongoing':
      return <Icon name="Clock" className="h-6 w-6 animate-pulse text-black" />
    default:
      return <Icon name="Circle" className="text-muted-foreground h-6 w-6" />
  }
}

export const AcademicTimeline = () => {
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

        {academicTimelineData.map((item, index) => {
          const isEven = index % 2 === 0

          return (
            <div
              key={index}
              className={cn(
                'relative mb-20 flex items-center justify-center',
                index === academicTimelineData.length - 1 && 'mb-0',
              )}
            >
              {/* Timeline item */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className={cn(
                  'relative ml-4 w-[calc(100%-32px)] pl-10',
                  'lg:w-5/12',
                  'lg:mr-auto lg:ml-auto',
                  'lg:pr-10 lg:pl-10',
                  isEven ? 'lg:mr-auto lg:ml-0 lg:pr-10 lg:pl-0' : 'lg:mr-0 lg:ml-auto lg:pr-0 lg:pl-10',
                )}
              >
                {/* Content card */}
                <div
                  className={cn(
                    'rounded-lg border-2 p-5 shadow-lg transition-all duration-300 hover:shadow-xl',
                    statusColors[item.status],
                  )}
                >
                  {/* Course type badge */}
                  <div className="flex flex-wrap items-center justify-between">
                    <div
                      className={cn(
                        'mb-2 inline-block rounded-full border px-3 py-1 text-xs font-medium',
                        typeColors[item.type],
                      )}
                    >
                      {typeLabels[item.type]}
                    </div>
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
                      }}
                      className={cn(
                        'flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium dark:text-black',
                        dateColors[item.status],
                        'flex lg:hidden',
                      )}
                    >
                      <Icon name="Calendar" className="h-3 w-3" />
                      {item.date}
                      {item.endDate && ` - ${item.endDate}`}
                    </motion.div>
                  </div>
                  <h3 className={cn('mb-1 flex items-center gap-2 text-xl font-bold text-black')}>
                    <span
                      className={cn(
                        'rounded-full p-1.5',
                        item.status === 'completed'
                          ? 'bg-emerald-100'
                          : item.status === 'ongoing'
                            ? 'bg-blue-100'
                            : 'bg-gray-100',
                      )}
                    >
                      <CourseIcon icon={item.icon} />
                    </span>
                    {item.title}
                  </h3>

                  <h4 className="mb-3 text-sm font-medium text-gray-600">{item.institution}</h4>

                  <p className="mb-3 text-gray-700">{item.content}</p>

                  <div className="flex items-center gap-2 text-sm font-medium">
                    <StatusIcon status={item.status} />
                    <span className="text-black">
                      {item.status === 'completed'
                        ? 'Concluído'
                        : item.status === 'ongoing'
                          ? 'Em andamento'
                          : 'Planejado'}
                    </span>
                  </div>
                </div>

                {/* Arrow pointing to timeline */}
                <div
                  className={cn(
                    'absolute top-10 h-0 w-0 border-8 border-solid',
                    'left-2 border-l-0 border-t-transparent border-r-transparent border-b-transparent',
                    'lg:top-10',
                    isEven
                      ? 'lg:right-2 lg:left-auto lg:border-r-0 lg:border-t-transparent lg:border-b-transparent lg:border-l-transparent'
                      : 'lg:left-2 lg:border-l-0 lg:border-t-transparent lg:border-r-transparent lg:border-b-transparent',
                    item.status === 'completed' &&
                      (isEven ? 'border-l-emerald-500 lg:border-r-emerald-500' : 'border-l-emerald-500'),
                    item.status === 'ongoing' && (isEven ? 'lg:border-r-primary border-l-primary' : 'border-l-primary'),
                    item.status === 'planned' &&
                      (isEven ? 'border-l-gray-300 lg:border-r-gray-300' : 'border-l-gray-300'),
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
                className="absolute left-0 z-10 transform lg:left-1/2 lg:-translate-x-1/2"
              >
                <div
                  className={cn(
                    'flex h-10 w-10 items-center justify-center rounded-full border-4 bg-white',
                    item.status === 'completed' && 'border-emerald-500',
                    item.status === 'ongoing' && 'border-primary',
                    item.status === 'planned' && 'border-gray-300',
                  )}
                >
                  <StatusIcon status={item.status} />
                </div>
              </motion.div>

              {/* Date badge */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
                }}
                className={cn(
                  'absolute flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium dark:text-black',
                  dateColors[item.status],
                  'top-10 left-[52%]',
                  'hidden lg:flex',
                  isEven ? 'lg:top-10 lg:left-[52%]' : 'lg:top-10 lg:right-[52%] lg:left-auto',
                )}
              >
                <Icon name="Calendar" className="h-3 w-3" />
                {item.date}
                {item.endDate && ` - ${item.endDate}`}
              </motion.div>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}
