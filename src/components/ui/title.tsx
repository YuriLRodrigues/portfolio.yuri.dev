'use client'

import type { HTMLAttributes, ReactNode } from 'react'
import React, { JSX } from 'react'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
interface SectionTitleProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  className?: string
}

export function Title({ children, as = 'h2', className }: SectionTitleProps) {
  const HeadingTag = (as ?? 'h2') as keyof JSX.IntrinsicElements

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className={cn('relative flex flex-col items-center justify-center', className)}
    >
      <motion.div className="relative" variants={titleVariants}>
        <HeadingTag
          className={cn(
            'text-foreground text-foreground text-center text-3xl font-bold tracking-tight uppercase sm:text-4xl md:text-5xl',
          )}
        >
          {children}
        </HeadingTag>
      </motion.div>
    </motion.div>
  )
}
