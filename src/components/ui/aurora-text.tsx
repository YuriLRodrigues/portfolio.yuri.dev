'use client'

import { useEffect, useRef } from 'react'

interface GradientTextProps {
  text: string
  className?: string
  startColor?: string
  endColor?: string
  speed?: number
}

export function GradientText({
  text = 'beautiful',
  className = '',
  startColor = '#ff3366',
  endColor = '#33ccff',
  // speed = 3,
}: GradientTextProps) {
  const textRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const textElement = textRef.current
    if (!textElement) return

    let animationFrame: number
    let position = 0

    const animate = () => {
      position = (position + 0.5) % 200

      if (textElement) {
        // Update the background position
        textElement.style.backgroundPosition = `${position}% 50%`
      }

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <span
      ref={textRef}
      className={`text-4xl font-bold text-wrap break-words sm:text-6xl ${className}`}
      style={{
        background: `linear-gradient(90deg, ${startColor}, ${endColor}, ${startColor})`,
        backgroundSize: '200% auto',
        color: 'transparent',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        display: 'inline-block',
      }}
    >
      {text}
    </span>
  )
}
