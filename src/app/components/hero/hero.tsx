'use client'

import React, { Suspense } from 'react'

import { Icon } from '@/components/icon'
import { Button } from '@/components/ui/button'

import { GlobeIconsSkeleton } from './globe-icons-skeleton'
import { Presentation } from './presentation'
import { PresentationSkeleton } from './presentation-skeleton'

const GlobeIcons = React.lazy(() => import('./globe-icons'))

export const Hero = () => {
  return (
    <div
      className="relative isolate flex min-h-screen w-full flex-col items-center justify-center overflow-hidden pt-12"
      id="home"
    >
      <a
        href="#timeline"
        className="absolute bottom-0 left-1/2 z-[9999] -translate-x-1/2 animate-bounce cursor-pointer"
      >
        <Button className="h-10 w-10 cursor-pointer rounded-full" effect="shine">
          <Icon name="ArrowDown" className="size-8" />
        </Button>
      </a>
      <div className="mx-auto grid w-full gap-4 xl:grid-cols-2 xl:items-center">
        <Suspense fallback={<PresentationSkeleton />}>
          <Presentation />
        </Suspense>

        <Suspense fallback={<GlobeIconsSkeleton />}>
          <GlobeIcons />
        </Suspense>
      </div>
    </div>
  )
}
