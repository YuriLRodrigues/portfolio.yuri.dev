'use client'

import React, { ReactNode } from 'react'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface TiltProps {
  children: ReactNode
  className?: string
  rotationFactor?: number
  scale?: number
  perspective?: number
  isRevese?: boolean
  glareEnable?: boolean
  glareMaxOpacity?: number
  glareColor?: string
  glarePosition?: 'top' | 'right' | 'bottom' | 'left' | 'all'
  transitionDuration?: number
  tiltAngleXInitial?: number
  tiltAngleYInitial?: number
  tiltMaxAngleX?: number
  tiltMaxAngleY?: number
}

export const Tilt = ({
  children,
  className = '',
  // rotationFactor = 15,
  scale = 1.05,
  perspective = 1000,
  isRevese = false,
  glareEnable = false,
  glareMaxOpacity = 0.2,
  glareColor = 'white',
  glarePosition = 'top',
  transitionDuration = 150,
  // tiltAngleXInitial = 0,
  // tiltAngleYInitial = 0,
  tiltMaxAngleX = 20,
  tiltMaxAngleY = 20,
}: TiltProps) => {
  // Motion values for tracking mouse position
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Spring animations for smoother movement
  const rotateX = useSpring(
    useTransform(y, [-0.5, 0.5], isRevese ? [-tiltMaxAngleX, tiltMaxAngleX] : [tiltMaxAngleX, -tiltMaxAngleX]),
    {
      stiffness: 300,
      damping: 30,
    },
  )

  const rotateY = useSpring(
    useTransform(x, [-0.5, 0.5], isRevese ? [tiltMaxAngleY, -tiltMaxAngleY] : [-tiltMaxAngleY, tiltMaxAngleY]),
    {
      stiffness: 300,
      damping: 30,
    },
  )

  const springScale = useSpring(1, {
    stiffness: 300,
    damping: 30,
  })

  // Glare position and opacity
  const glareOpacity = useMotionValue(0)
  const glareSpringOpacity = useSpring(glareOpacity, {
    stiffness: 300,
    damping: 30,
  })

  const glareX = useMotionValue(50)
  const glareY = useMotionValue(50)
  const glareSpringX = useSpring(glareX, {
    stiffness: 300,
    damping: 30,
  })
  const glareSpringY = useSpring(glareY, {
    stiffness: 300,
    damping: 30,
  })

  // Handle mouse movement
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()

    // Calculate normalized position (0 to 1)
    const normalizedX = (event.clientX - rect.left) / rect.width
    const normalizedY = (event.clientY - rect.top) / rect.height

    // Convert to -0.5 to 0.5 range
    x.set(normalizedX - 0.5)
    y.set(normalizedY - 0.5)

    // Update glare position based on mouse position
    if (glareEnable) {
      glareOpacity.set(glareMaxOpacity)

      if (glarePosition === 'all') {
        glareX.set(normalizedX * 100)
        glareY.set(normalizedY * 100)
      } else if (glarePosition === 'top') {
        glareX.set(normalizedX * 100)
        glareY.set(0)
      } else if (glarePosition === 'right') {
        glareX.set(100)
        glareY.set(normalizedY * 100)
      } else if (glarePosition === 'bottom') {
        glareX.set(normalizedX * 100)
        glareY.set(100)
      } else if (glarePosition === 'left') {
        glareX.set(0)
        glareY.set(normalizedY * 100)
      }
    }

    springScale.set(scale)
  }

  // Reset on mouse leave
  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    if (glareEnable) {
      glareOpacity.set(0)
    }
    springScale.set(1)
  }

  return (
    <motion.div
      className={`relative ${className}`}
      style={{
        perspective: perspective,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="h-full w-full"
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          scale: springScale,
          transition: `all ${transitionDuration}ms ease-out`,
        }}
      >
        {children}

        {/* Glare effect */}
        {glareEnable && (
          <motion.div
            className="rounded-inherit pointer-events-none absolute inset-0 overflow-hidden"
            style={{
              borderRadius: 'inherit',
              opacity: glareSpringOpacity,
            }}
          >
            <motion.div
              className="pointer-events-none absolute top-[-50%] left-[-50%] h-[200%] w-[200%]"
              style={{
                background: `radial-gradient(circle at ${glareSpringX}% ${glareSpringY}%, ${glareColor} 0%, transparent 80%)`,
              }}
            />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}
