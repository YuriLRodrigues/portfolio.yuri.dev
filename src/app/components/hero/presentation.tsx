'use client'
import { Icon } from '@/components/icon'
import { GradientText } from '@/components/ui/aurora-text'
import { Button } from '@/components/ui/button'
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button'

import { motion } from 'framer-motion'

export const Presentation = () => {
  return (
    <div className="mx-auto space-y-3 xl:max-w-6xl">
      <motion.h1
        className="text-foreground text-3xl font-bold tracking-tight break-words sm:text-6xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-gradient break-words uppercase">Em busca contínua de aprimoramento no</span>
        <GradientText text="DESENVOLVIMENTO WEB" />
      </motion.h1>

      <motion.p
        className="text-muted-foreground mt-6 max-w-4xl text-lg leading-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Desenvolvendo inovações que transformam aspirações em soluções tangíveis, impulsionando o potencial do seu
        negócio além dos limites.
      </motion.p>
      <motion.div
        className="flex flex-wrap items-center gap-x-6 gap-y-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <InteractiveHoverButton className="w-fit">
          <a
            href="/Currículo Desenvolvedor - Yuri Leite Rodrigues.pdf"
            target="_blank"
            className="flex h-full w-full items-center gap-2"
            rel="noreferrer"
          >
            <Icon name="Download" /> Baixar CV
          </a>
        </InteractiveHoverButton>
        <Button effect="shine" variant="default" className="w-fit cursor-pointer rounded-full" asChild>
          <a
            href="https://www.linkedin.com/in/yuri-leite-rodrigues/"
            target="_blank"
            className="flex items-center gap-2"
            rel="noreferrer"
          >
            <Icon name="Linkedin" /> Linkedin
          </a>
        </Button>
        <Button effect="shine" variant="default" className="w-fit cursor-pointer rounded-full" asChild>
          <a
            href="https://github.com/YuriLRodrigues"
            target="_blank"
            className="flex items-center gap-2"
            rel="noreferrer"
          >
            <Icon name="Github" /> GitHub
          </a>
        </Button>
      </motion.div>
    </div>
  )
}
