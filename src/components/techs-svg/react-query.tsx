import Image from 'next/image'

import ReactQuery from './react-query.svg'

export const ReactQuerySvg = () => {
  return (
    <Image
      width={50}
      height={50}
      src={ReactQuery}
      className="aspect-square size-10 h-10 w-10 max-w-full"
      alt="reactQuery-ui"
    />
  )
}
