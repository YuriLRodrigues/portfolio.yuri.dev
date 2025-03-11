'use client'

import Image from 'next/image'

import { Icon } from '@/components/icon'
import { Button } from '@/components/ui/button'
import { TypewriterEffect } from '@/components/ui/typewriter-effect'

export const TimelineResume = () => {
  return (
    <section className="w-full" id="timeline">
      <div className="container mx-auto grid items-center justify-center gap-8 px-4 md:flex-row md:gap-12 lg:grid-cols-2">
        <div className="relative mx-auto h-64 max-h-64 min-h-64 w-64 max-w-64 min-w-64 md:h-80 md:max-h-80 md:min-h-80 md:w-80 md:max-w-80 md:min-w-80">
          <div className="absolute inset-0 animate-pulse rounded-full bg-blue-500 opacity-20 blur-md" />
          <div className="relative h-full w-full overflow-hidden rounded-full">
            <Image src="/perfil.png" alt="Profile Picture" fill className="object-cover object-center" priority />
          </div>
        </div>

        <div className="mx-auto flex flex-col space-y-2">
          <h2 className="text-3xl font-bold md:text-4xl">Olá, eu sou</h2>
          <h1 className="text-4xl font-bold md:text-5xl">Yuri Leite Rodrigues</h1>
          <div className="flex h-12 items-center">
            <h3 className="text-2xl font-bold text-blue-400 md:text-3xl">
              Desenvolvedor <TypewriterEffect roles={['Fullstack', 'Frontend', 'Backend']} />
            </h3>
          </div>

          <div className="space-y-2">
            <p>
              Desenvolvedor Full-Stack com experiência em sistemas escaláveis, desde a concepção até a implementação.
              Apaixonado por tecnologia e inovação, busco sempre aprimorar minhas habilidades e adotar boas práticas,
              como arquitetura limpa, código limpo e testes automatizados. Sou resiliente, analítico e comprometido com
              a entrega de soluções eficientes. Valorizo a troca de conhecimento, o trabalho em equipe e estou sempre
              aberto a novos desafios.
            </p>
            <p>
              Busco oportunidades onde possa aplicar minhas habilidades para desenvolver soluções impactantes. Tenho
              foco em resultados, aprendizado contínuo e adaptação a novos desafios, sempre buscando agregar valor aos
              projetos em que atuo.
            </p>
            <p>
              Ficarei feliz em trocar ideias e explorar possibilidades de colaboração. Se quiser saber mais, entre em
              contato pelas redes abaixo. Será um prazer contribuir para o crescimento da sua empresa e compartilhar
              conhecimentos com a equipe!
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a href="www.linkedin.com/in/yuri-leite-rodrigues" target="_blank" rel="noreferrer">
                <Button variant="default" effect="shine" className="flex items-center rounded-full">
                  <Icon name="Linkedin" /> Linkedin
                </Button>
              </a>
              <a href="mailto:rodriguesyuri769@gmail.com" target="_blank" rel="noreferrer">
                <Button variant="default" effect="shine" className="flex items-center rounded-full">
                  <Icon name="Mail" /> E-mail
                </Button>
              </a>
              <a href="https://wa.me/31987336364" target="_blank" rel="noreferrer">
                <Button variant="default" effect="shine" className="flex items-center rounded-full">
                  <Icon name="Phone" /> WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
