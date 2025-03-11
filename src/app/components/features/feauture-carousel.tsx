'use client'

import { useRef, useEffect, useState } from 'react'

import { Icon } from '@/components/icon'
import { Title } from '@/components/ui/title'

import { motion, useAnimation, useMotionValue } from 'framer-motion'

import features from './features'

export function FeatureCarousel() {
  const [width, setWidth] = useState(0)
  const carousel = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const controls = useAnimation()

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [])

  const handleDragEnd = () => {
    const currentX = x.get()
    if (currentX > 0) {
      controls.start({
        x: 0,
        transition: { type: 'spring', stiffness: 300, damping: 30 },
      })
    } else if (currentX < -width) {
      controls.start({
        x: -width,
        transition: { type: 'spring', stiffness: 300, damping: 30 },
      })
    }
  }

  return (
    <div className="relative flex min-h-[60vh] flex-col" id="feature">
      <div className="my-auto space-y-8">
        <Title as="h2">Diferenciais</Title>
        <motion.div ref={carousel} className="my-auto cursor-grab overflow-hidden rounded-3xl">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ cursor: 'grabbing' }}
            animate={controls}
            style={{ x }}
            onDragEnd={handleDragEnd}
            className="flex gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-background hover-lift border-primary/10 my-5 flex h-[300px] min-w-[300px] flex-col justify-between rounded-3xl border-2 p-8 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 dark:shadow-white/10"
              >
                <div>
                  <div className="mb-4 text-4xl">
                    <Icon name={feature.icon} className="size-6" />
                  </div>
                  <h3 className="text-foreground mb-2 text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
