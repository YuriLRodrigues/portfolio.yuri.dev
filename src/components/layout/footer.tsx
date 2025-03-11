'use client'

import Image from 'next/image'

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-background flex w-full flex-wrap items-center justify-center gap-4 px-6 py-4 text-center sm:justify-between sm:text-start">
      <Image src="/yr-logo.png" alt="Logo" width={40} height={40} />
      <p className="text-sm">&copy; {year} Yuri Leite Rodrigues. Todos os direitos reservados.</p>
    </footer>
  )
}
