import Image from 'next/image'

import Nodemailer from '../../../public/nodemailer.png'

export const NodemailerSvg = () => {
  return <Image width={50} height={50} src={Nodemailer} className="aspect-square h-4 w-5" alt="nodemailer" />
}
