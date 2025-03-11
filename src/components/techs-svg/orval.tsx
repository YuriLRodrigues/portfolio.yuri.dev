import Image from 'next/image'

import Orval from './orval.svg'

export const OrvalSvg = () => {
  return <Image width={50} height={50} src={Orval} className="aspect-square size-10 h-10 w-10 max-w-full" alt="orval" />
}
