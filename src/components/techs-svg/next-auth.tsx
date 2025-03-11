import Image from 'next/image'

import NextAuth from '../../../public/next-auth.png'

export const NextAuthSvg = () => {
  return <Image width={50} height={50} src={NextAuth} className="aspect-square h-4 w-5" alt="next-auth" />
}
