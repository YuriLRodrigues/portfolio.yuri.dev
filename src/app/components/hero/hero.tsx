'use client'

import { Icon } from '@/components/icon'
import { GradientText } from '@/components/ui/aurora-text'
import { Button } from '@/components/ui/button'
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button'

import { motion } from 'framer-motion'

import { GlobeIcons } from '../globe-icons/globe-icons'

export default function Hero() {
  return (
    <div
      className="relative isolate flex min-h-screen w-full flex-col items-center justify-center overflow-hidden pt-12"
      id="home"
    >
      <a href="#timeline" className="absolute bottom-0 -translate-x-1/2 animate-bounce cursor-pointer">
        <Button className="h-10 w-10 cursor-pointer rounded-full" effect="shine">
          <Icon name="ArrowDown" className="size-8" />
        </Button>
      </a>
      <div className="mx-auto grid w-full xl:grid-cols-2 xl:items-center">
        <div className="mx-auto xl:max-w-6xl">
          <motion.h1
            className="text-foreground mt-10 text-4xl font-bold tracking-tight sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gradient uppercase">Em busca contínua de aprimoramento no</span>
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
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <InteractiveHoverButton className="w-fit">
              <a href="" target="_blank" className="flex h-full w-full items-center gap-2" rel="noreferrer">
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
        <motion.div
          className="mx-auto mt-16 flex w-full items-center justify-center xl:mt-0 xl:justify-end"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <GlobeIcons />
        </motion.div>
      </div>
    </div>
  )
}
