import Image from 'next/image'

import HookForm from './hook-form.svg'

export const HookFormSvg = () => {
  return <Image width={50} height={50} src={HookForm} className="aspect-square h-4 w-5" alt="Hook-form" />
}
