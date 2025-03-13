'use client'

import { IconCloud } from '@/components/ui/icon-cloud'

import { motion } from 'framer-motion'

import { slugs } from './slugs'

const GlobeIcons = () => {
  return (
    <motion.div
      className="relative mx-auto flex size-full w-full max-w-xl items-center justify-center overflow-hidden pb-20 sm:ml-auto sm:px-20 sm:pb-0 xl:mt-0 xl:justify-end"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <IconCloud iconSlugs={slugs} />
    </motion.div>
  )
}

export default GlobeIcons
