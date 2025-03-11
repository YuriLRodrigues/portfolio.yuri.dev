import { IconCloud } from '@/components/ui/icon-cloud'

import { slugs } from './slugs'

export function GlobeIcons() {
  return (
    <div className="relative flex size-full max-w-xl items-center justify-center overflow-hidden px-20 pt-8 pb-20">
      <IconCloud iconSlugs={slugs} />
    </div>
  )
}
