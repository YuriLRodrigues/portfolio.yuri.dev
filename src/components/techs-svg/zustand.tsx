import Image from 'next/image'

import Zustand from './zustand.svg'

export const ZustandSvg = () => {
  return (
    <Image width={50} height={50} src={Zustand} className="aspect-square size-10 h-10 w-10 max-w-full" alt="zustand" />
  )
}
