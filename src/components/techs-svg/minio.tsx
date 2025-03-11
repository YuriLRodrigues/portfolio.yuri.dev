import Image from 'next/image'

import Minio from './minio.svg'

export const MinioSvg = () => {
  return <Image width={50} height={50} src={Minio} className="aspect-square size-10 h-10 w-10 max-w-full" alt="minio" />
}
