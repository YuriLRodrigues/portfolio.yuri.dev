'use client'

import { useTheme } from 'next-themes'
import { useState, useRef, useEffect } from 'react'

import { Tilt } from '@/components/ui/tilt'

import { motion, AnimatePresence, useAnimation } from 'framer-motion'

import type { TechsProps } from './techs'

type TechCardProps = TechsProps & {
  index: number
}

export const TechCard = ({ name, icon, index }: TechCardProps) => {
  const SvgIcon = icon
  const [isHovered, setIsHovered] = useState(false)
  const { resolvedTheme } = useTheme()
  const themeIsDark = resolvedTheme === 'dark'
  const controls = useAnimation()
  const particlesRef = useRef<HTMLDivElement>(null)

  // Random delay for staggered animation
  const delay = index * 0.1

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay },
    })
  }, [controls, delay])

  // Generate random particle positions
  const generateParticles = () => {
    return Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 0.8 + Math.random() * 1.2,
      delay: Math.random() * 0.2,
    }))
  }

  const particles = generateParticles()

  return (
    <motion.div initial={{ opacity: 0, y: 30 }} animate={controls} className="perspective-1000">
      <Tilt
        rotationFactor={20}
        scale={1.05}
        glareEnable={true}
        glareMaxOpacity={themeIsDark ? 0.2 : 0.15}
        glareColor={themeIsDark ? '#ffffff' : '#ffffff'}
        glarePosition="all"
        className="h-full w-full"
      >
        <motion.div
          key={name}
          className="relative flex flex-row items-center justify-start overflow-hidden rounded-xl border-2 px-3 py-1 transition-all duration-300 ease-in-out"
          style={{
            background: themeIsDark
              ? 'linear-gradient(145deg, rgba(30,30,30,0.8), rgba(20,20,20,0.9))'
              : 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(240,240,240,0.8))',
            borderColor: isHovered
              ? themeIsDark
                ? 'rgba(255,255,255,0.2)'
                : 'rgba(0,0,0,0.15)'
              : themeIsDark
                ? 'rgba(255,255,255,0.1)'
                : 'rgba(0,0,0,0.08)',
            boxShadow: isHovered
              ? themeIsDark
                ? '0 10px 30px -10px rgba(0,0,0,0.8), 0 0 15px 0 rgba(255,255,255,0.1) inset'
                : '0 10px 30px -10px rgba(0,0,0,0.15), 0 0 15px 0 rgba(255,255,255,0.5) inset'
              : themeIsDark
                ? '0 8px 20px -8px rgba(0,0,0,0.5)'
                : '0 8px 20px -8px rgba(0,0,0,0.1)',
          }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          {/* Ambient background gradient */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: themeIsDark
                ? 'radial-gradient(circle at center, rgba(60,60,60,0.3) 0%, rgba(30,30,30,0) 70%)'
                : 'radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, rgba(240,240,240,0) 70%)',
            }}
            animate={{
              scale: isHovered ? 1.2 : 1,
              opacity: isHovered ? 1 : 0.5,
            }}
            transition={{ duration: 0.6 }}
          />

          {/* Animated border glow */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute inset-0 rounded-xl opacity-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  boxShadow: themeIsDark
                    ? '0 0 15px 2px rgba(255,255,255,0.15) inset'
                    : '0 0 15px 2px rgba(0,0,0,0.05) inset',
                }}
              />
            )}
          </AnimatePresence>

          {/* Icon container - reduced height to decrease spacing */}
          <motion.div
            className="relative flex items-center justify-center"
            animate={{
              x: isHovered ? -3 : 0,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          >
            <motion.div
              className="relative"
              animate={{
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.4 }}
            >
              {/* Glow effect behind icon */}
              <motion.div
                className="absolute -inset-3 rounded-full blur-md"
                style={{
                  background: themeIsDark
                    ? 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)'
                    : 'radial-gradient(circle, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 70%)',
                }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: isHovered ? 1.2 : 0.8,
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{ duration: 0.4 }}
              />

              {/* Icon with 360 rotation on hover */}
              <motion.div
                className="relative flex size-8 items-center justify-center"
                style={{
                  color: themeIsDark ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.8)',
                }}
                animate={{
                  rotate: isHovered ? [0, 360] : 0,
                  scale: isHovered ? [1, 1.02, 1.02, 1] : 1,
                }}
                transition={{
                  rotate: {
                    duration: 1.2,
                    ease: 'easeInOut',
                  },
                  scale: {
                    duration: 0.8,
                    ease: 'easeInOut',
                    times: [0, 0.3, 0.6, 1],
                    repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
                    repeatType: 'reverse',
                    repeatDelay: 1,
                  },
                }}
              >
                {SvgIcon}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Name container - adjusted position to reduce spacing */}
          <motion.div
            className="ml-3"
            style={{
              background: 'transparent',
            }}
            animate={{ x: isHovered ? 3 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.p
              className="text-sm font-semibold"
              style={{
                color: themeIsDark ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.8)',
                textShadow: themeIsDark ? '0 2px 4px rgba(0,0,0,0.5)' : '0 1px 2px rgba(0,0,0,0.1)',
              }}
              animate={{
                scale: isHovered ? 1.05 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              {name}
            </motion.p>
          </motion.div>

          {/* Particles effect */}
          <div ref={particlesRef} className="pointer-events-none absolute inset-0 overflow-hidden">
            <AnimatePresence>
              {isHovered && (
                <>
                  {particles.map((particle) => (
                    <motion.div
                      key={`particle-${particle.id}`}
                      className="absolute rounded-full"
                      style={{
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        background: themeIsDark ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.4)',
                        boxShadow: themeIsDark ? '0 0 4px 1px rgba(255,255,255,0.3)' : '0 0 4px 1px rgba(0,0,0,0.1)',
                        top: '50%',
                        left: '50%',
                        x: '-50%',
                        y: '-50%',
                      }}
                      initial={{
                        scale: 0,
                        x: '-50%',
                        y: '-50%',
                        opacity: 0.8,
                      }}
                      animate={{
                        scale: [0, 1, 0.8, 0],
                        x: [`-50%`, `calc(-50% + ${particle.x - 50}px)`],
                        y: [`-50%`, `calc(-50% + ${particle.y - 50}px)`],
                        opacity: [0, 0.8, 0.4, 0],
                      }}
                      exit={{
                        scale: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        ease: 'easeOut',
                        times: [0, 0.2, 0.8, 1],
                      }}
                    />
                  ))}
                </>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </Tilt>
    </motion.div>
  )
}
