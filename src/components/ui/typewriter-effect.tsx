import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

type TypewriterEffectProps = {
  roles: string[]
}

export function TypewriterEffect({ roles }: TypewriterEffectProps) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setDisplayText(currentRole.substring(0, displayText.length + 1))
        setTypingSpeed(150)

        // If completed typing
        if (displayText === currentRole) {
          // Pause at the end of typing
          setTypingSpeed(2000)
          setIsDeleting(true)
        }
      } else {
        // Deleting
        setDisplayText(currentRole.substring(0, displayText.length - 1))
        setTypingSpeed(75)

        // If completed deleting
        if (displayText === '') {
          setIsDeleting(false)
          setCurrentRoleIndex((currentRoleIndex + 1) % roles.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [displayText, currentRoleIndex, isDeleting, typingSpeed, roles])

  return (
    <span className="inline-block min-w-32">
      {displayText}
      <span
        className={cn('ml-1 inline-block h-6 w-1 bg-blue-400', {
          'animate-blink': !isDeleting,
        })}
      ></span>
    </span>
  )
}
