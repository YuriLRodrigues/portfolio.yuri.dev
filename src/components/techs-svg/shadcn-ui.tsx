import Image from 'next/image'

import Shadcn from './shadcn-ui.svg'

export const ShadcnSvg = () => {
  return (
    <Image width={50} height={50} src={Shadcn} className="aspect-square size-10 h-10 w-10 max-w-full" alt="shadcn-ui" />
  )
}
