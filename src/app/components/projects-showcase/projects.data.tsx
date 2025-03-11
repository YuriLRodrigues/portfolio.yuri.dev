import type { ReactNode } from 'react'

import {
  CypressSvg,
  DockerSvg,
  EslintSvg,
  ExpressSvg,
  FramerMotionSvg,
  NestSvg,
  NextSvg,
  NodeSvg,
  PostgreSqlSvg,
  PrettierSvg,
  PrismaSvg,
  ReactSvg,
  SwaggerSvg,
  TailwindCssSvg,
  TypescriptSvg,
  ViteSvg,
} from '@/components/techs-svg'
import { BcryptSvg } from '@/components/techs-svg/bcrypt'
import { CommitLintSvg } from '@/components/techs-svg/commit-lint'
import { HookFormSvg } from '@/components/techs-svg/hook-form'
import { JwtSvg } from '@/components/techs-svg/jwt'
import { MinioSvg } from '@/components/techs-svg/minio'
import { NextAuthSvg } from '@/components/techs-svg/next-auth'
import { NodemailerSvg } from '@/components/techs-svg/nodemailer'
import { OrvalSvg } from '@/components/techs-svg/orval'
import { ReactQuerySvg } from '@/components/techs-svg/react-query'
import { ShadcnSvg } from '@/components/techs-svg/shadcn-ui'
import { ZodSvg } from '@/components/techs-svg/zod'
import { ZustandSvg } from '@/components/techs-svg/zustand'

import { ProjectBadge } from './project-badge'
import { ProjectIcon } from './project-icon'

export type Project = {
  id: number
  title: string
  description: string
  technologies: ReactNode[]
  images: string[]
  links: {
    website: string
    github: string
  }
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'AutoCars - Frontend',
    description:
      'O AutoCars é uma plataforma completa para anúncios de veículos. Ele permite que usuários anunciem, pesquisem e interajam com anúncios de carros, além de favoritar, comentar e gerenciar suas vendas via dashboard.',
    technologies: [
      <ProjectBadge key="next">
        <ProjectIcon>
          <NextSvg />
        </ProjectIcon>
        <span>Next.js</span>
      </ProjectBadge>,
      <ProjectBadge key="tailwind">
        <ProjectIcon>
          <TailwindCssSvg />
        </ProjectIcon>
        <span>Tailwind CSS</span>
      </ProjectBadge>,
      <ProjectBadge key="react">
        <ProjectIcon>
          <ReactSvg />
        </ProjectIcon>
        <span>React</span>
      </ProjectBadge>,
      <ProjectBadge key="typescript">
        <ProjectIcon>
          <TypescriptSvg />
        </ProjectIcon>
        <span>TypeScript</span>
      </ProjectBadge>,
      <ProjectBadge key="react-query">
        <ProjectIcon>
          <ReactQuerySvg />
        </ProjectIcon>
        <span>React Query</span>
      </ProjectBadge>,
      <ProjectBadge key="zod">
        <ProjectIcon>
          <ZodSvg />
        </ProjectIcon>
        <span>Zod</span>
      </ProjectBadge>,
      <ProjectBadge key="framer">
        <ProjectIcon>
          <FramerMotionSvg />
        </ProjectIcon>
        <span>Framer Motion</span>
      </ProjectBadge>,
      <ProjectBadge key="zustand">
        <ProjectIcon>
          <ZustandSvg />
        </ProjectIcon>
        <span>Zustand</span>
      </ProjectBadge>,
      <ProjectBadge key="hook-form">
        <ProjectIcon>
          <HookFormSvg />
        </ProjectIcon>
        <span>React Hook Form</span>
      </ProjectBadge>,
      <ProjectBadge key="shadcn-ui">
        <ProjectIcon>
          <ShadcnSvg />
        </ProjectIcon>
        <span>Shadcn Ui</span>
      </ProjectBadge>,
      <ProjectBadge key="cypress">
        <ProjectIcon>
          <CypressSvg />
        </ProjectIcon>
        <span>Cypress</span>
      </ProjectBadge>,
      <ProjectBadge key="orval">
        <ProjectIcon>
          <OrvalSvg />
        </ProjectIcon>
        <span>Orval</span>
      </ProjectBadge>,
      <ProjectBadge key="eslint">
        <ProjectIcon>
          <EslintSvg />
        </ProjectIcon>
        <span>Eslint</span>
      </ProjectBadge>,
      <ProjectBadge key="prettier">
        <ProjectIcon>
          <PrettierSvg />
        </ProjectIcon>
        <span>Prettier</span>
      </ProjectBadge>,
      <ProjectBadge key="commit-lint">
        <ProjectIcon>
          <CommitLintSvg />
        </ProjectIcon>
        <span>CommitLint</span>
      </ProjectBadge>,
    ],
    images: ['/projects/AutoCars - 2.png', '/projects/AutoCars - 3.jpg', '/projects/AutoCars - 1.jpg'],
    links: {
      website: 'https://autocars-frontend.vercel.app/',
      github: 'https://github.com/YuriLRodrigues/autocars-frontend',
    },
  },
  {
    id: 2,
    title: 'AutoCars - Backend',
    description:
      'O backend do AutoCars foi construído seguindo princípios de SOLID, DDD e Clean Architecture para garantir modularidade, escalabilidade e fácil manutenção. Utiliza Prisma ORM para acesso ao banco de dados e Autenticação JWT para segurança. No futuro, será expandida com integração de pagamentos e chat entre comprador e vendedor.',
    technologies: [
      <ProjectBadge key="nest">
        <ProjectIcon>
          <NestSvg />
        </ProjectIcon>
        <span>Nest.js</span>
      </ProjectBadge>,
      <ProjectBadge key="node">
        <ProjectIcon>
          <NodeSvg />
        </ProjectIcon>
        <span>Node.js</span>
      </ProjectBadge>,
      <ProjectBadge key="express">
        <ProjectIcon>
          <ExpressSvg />
        </ProjectIcon>
        <span>Express.</span>
      </ProjectBadge>,
      <ProjectBadge key="typescript">
        <ProjectIcon>
          <TypescriptSvg />
        </ProjectIcon>
        <span>TypeScript</span>
      </ProjectBadge>,
      <ProjectBadge key="docker">
        <ProjectIcon>
          <DockerSvg />
        </ProjectIcon>
        <span>Docker</span>
      </ProjectBadge>,
      <ProjectBadge key="prisma">
        <ProjectIcon>
          <PrismaSvg />
        </ProjectIcon>
        <span>Prisma</span>
      </ProjectBadge>,
      <ProjectBadge key="postgresql">
        <ProjectIcon>
          <PostgreSqlSvg />
        </ProjectIcon>
        <span>PostgreSQL</span>
      </ProjectBadge>,
      <ProjectBadge key="zod">
        <ProjectIcon>
          <ZodSvg />
        </ProjectIcon>
        <span>Zod</span>
      </ProjectBadge>,
      <ProjectBadge key="vitest">
        <ProjectIcon>
          <ViteSvg />
        </ProjectIcon>
        <span>Vitest</span>
      </ProjectBadge>,
      <ProjectBadge key="jwt">
        <ProjectIcon>
          <JwtSvg />
        </ProjectIcon>
        <span>Jwt</span>
      </ProjectBadge>,
      <ProjectBadge key="bcrypt">
        <ProjectIcon>
          <BcryptSvg />
        </ProjectIcon>
        <span>Bcrypt</span>
      </ProjectBadge>,
      <ProjectBadge key="swagger">
        <ProjectIcon>
          <SwaggerSvg />
        </ProjectIcon>
        <span>Swagger</span>
      </ProjectBadge>,
      <ProjectBadge key="nodemailer">
        <ProjectIcon>
          <NodemailerSvg />
        </ProjectIcon>
        <span>Nodemailer</span>
      </ProjectBadge>,
      <ProjectBadge key="minio">
        <ProjectIcon>
          <MinioSvg />
        </ProjectIcon>
        <span>Minio</span>
      </ProjectBadge>,
      <ProjectBadge key="eslint">
        <ProjectIcon>
          <EslintSvg />
        </ProjectIcon>
        <span>Eslint</span>
      </ProjectBadge>,
      <ProjectBadge key="prettier">
        <ProjectIcon>
          <PrettierSvg />
        </ProjectIcon>
        <span>Prettier</span>
      </ProjectBadge>,
    ],
    images: ['/projects/AutoCars - 1 - Backend.png'],
    links: {
      website: 'https://yuri-rodrigues-autocars-backend.pd8edx.easypanel.host/swagger/docs',
      github: 'https://github.com/YuriLRodrigues/autocars-backend',
    },
  },
  {
    id: 3,
    title: 'Setup Pro Store',
    description:
      'Plataforma de e-commerce, onde usuários podem navegar por produtos, adicionar ao carrinho e finalizar compras. Conta com dashboard administrativo para gerenciamento de pedidos, produtos e categorias. Os produtos são organizados por categorias, oferecendo uma experiência otimizada. A aplicação é responsiva, garantindo usabilidade.',
    technologies: [
      <ProjectBadge key="next">
        <ProjectIcon>
          <NextSvg />
        </ProjectIcon>
        <span>Next.js</span>
      </ProjectBadge>,
      <ProjectBadge key="tailwind">
        <ProjectIcon>
          <TailwindCssSvg />
        </ProjectIcon>
        <span>Tailwind CSS</span>
      </ProjectBadge>,
      <ProjectBadge key="react">
        <ProjectIcon>
          <ReactSvg />
        </ProjectIcon>
        <span>React</span>
      </ProjectBadge>,
      <ProjectBadge key="typescript">
        <ProjectIcon>
          <TypescriptSvg />
        </ProjectIcon>
        <span>TypeScript</span>
      </ProjectBadge>,
      <ProjectBadge key="zod">
        <ProjectIcon>
          <ZodSvg />
        </ProjectIcon>
        <span>Zod</span>
      </ProjectBadge>,
      <ProjectBadge key="prisma">
        <ProjectIcon>
          <PrismaSvg />
        </ProjectIcon>
        <span>Prisma</span>
      </ProjectBadge>,
      <ProjectBadge key="postgresql">
        <ProjectIcon>
          <PostgreSqlSvg />
        </ProjectIcon>
        <span>PostgreSQL</span>
      </ProjectBadge>,
      <ProjectBadge key="next-auth">
        <ProjectIcon>
          <NextAuthSvg />
        </ProjectIcon>
        <span>NextAuth</span>
      </ProjectBadge>,
      <ProjectBadge key="context-api">
        <ProjectIcon>
          <ReactSvg />
        </ProjectIcon>
        <span>ContextApi</span>
      </ProjectBadge>,
      <ProjectBadge key="hook-form">
        <ProjectIcon>
          <HookFormSvg />
        </ProjectIcon>
        <span>React Hook Form</span>
      </ProjectBadge>,
      <ProjectBadge key="shadcn-ui">
        <ProjectIcon>
          <ShadcnSvg />
        </ProjectIcon>
        <span>Shadcn Ui</span>
      </ProjectBadge>,
      <ProjectBadge key="eslint">
        <ProjectIcon>
          <EslintSvg />
        </ProjectIcon>
        <span>Eslint</span>
      </ProjectBadge>,
      <ProjectBadge key="prettier">
        <ProjectIcon>
          <PrettierSvg />
        </ProjectIcon>
        <span>Prettier</span>
      </ProjectBadge>,
    ],
    images: ['/projects/setup-pro-store.png'],
    links: {
      website: 'https://setup-pro-store.vercel.app/',
      github: 'https://github.com/YuriLRodrigues/setup-pro-store',
    },
  },
  {
    id: 4,
    title: 'Cinematecando',
    description:
      'Cinematecando é uma plataforma para explorar filmes e séries, permitindo que os usuários pesquisem títulos, filtrem por gênero, acessem detalhes e elencos, descubram outros filmes de um ator, alterem o tema entre claro e escuro e salvem títulos na lista pessoal. Com uma interface moderna, responsiva e fluida, o projeto oferece uma experiência imersiva para amantes do cinema e da TV.',
    technologies: [
      <ProjectBadge key="next">
        <ProjectIcon>
          <NextSvg />
        </ProjectIcon>
        <span>Next.js</span>
      </ProjectBadge>,
      <ProjectBadge key="tailwind">
        <ProjectIcon>
          <TailwindCssSvg />
        </ProjectIcon>
        <span>Tailwind CSS</span>
      </ProjectBadge>,
      <ProjectBadge key="react">
        <ProjectIcon>
          <ReactSvg />
        </ProjectIcon>
        <span>React</span>
      </ProjectBadge>,
      <ProjectBadge key="typescript">
        <ProjectIcon>
          <TypescriptSvg />
        </ProjectIcon>
        <span>TypeScript</span>
      </ProjectBadge>,
      <ProjectBadge key="zod">
        <ProjectIcon>
          <ZodSvg />
        </ProjectIcon>
        <span>Zod</span>
      </ProjectBadge>,
      <ProjectBadge key="zustand">
        <ProjectIcon>
          <ZustandSvg />
        </ProjectIcon>
        <span>Zustand</span>
      </ProjectBadge>,
      <ProjectBadge key="hook-form">
        <ProjectIcon>
          <HookFormSvg />
        </ProjectIcon>
        <span>React Hook Form</span>
      </ProjectBadge>,
      <ProjectBadge key="shadcn-ui">
        <ProjectIcon>
          <ShadcnSvg />
        </ProjectIcon>
        <span>Shadcn Ui</span>
      </ProjectBadge>,
      <ProjectBadge key="eslint">
        <ProjectIcon>
          <EslintSvg />
        </ProjectIcon>
        <span>Eslint</span>
      </ProjectBadge>,
      <ProjectBadge key="prettier">
        <ProjectIcon>
          <PrettierSvg />
        </ProjectIcon>
        <span>Prettier</span>
      </ProjectBadge>,
    ],
    images: ['/projects/cinematecando.png'],
    links: {
      website: 'https://cinematecando.vercel.app/',
      github: 'https://github.com/YuriLRodrigues/cinematecando',
    },
  },
  {
    id: 5,
    title: 'Marvel - Teste técnico',
    description:
      'Plataforma interativa que permite explorar personagens da Marvel, exibindo uma listagem paginada com busca por nome. Cada personagem possui uma página detalhada com descrição, imagem e quadrinhos relacionados. A navegação preserva os filtros e a página anterior ao retornar à listagem, garantindo uma experiência fluida. Além disso, foram aplicadas otimizações para melhorar o desempenho e evitar requisições desnecessárias.',
    technologies: [
      <ProjectBadge key="next">
        <ProjectIcon>
          <NextSvg />
        </ProjectIcon>
        <span>Next.js</span>
      </ProjectBadge>,
      <ProjectBadge key="tailwind">
        <ProjectIcon>
          <TailwindCssSvg />
        </ProjectIcon>
        <span>Tailwind CSS</span>
      </ProjectBadge>,
      <ProjectBadge key="react">
        <ProjectIcon>
          <ReactSvg />
        </ProjectIcon>
        <span>React</span>
      </ProjectBadge>,
      <ProjectBadge key="typescript">
        <ProjectIcon>
          <TypescriptSvg />
        </ProjectIcon>
        <span>TypeScript</span>
      </ProjectBadge>,
      <ProjectBadge key="react-queryn">
        <ProjectIcon>
          <ReactQuerySvg />
        </ProjectIcon>
        <span>React Query</span>
      </ProjectBadge>,
      <ProjectBadge key="framer-motion">
        <ProjectIcon>
          <FramerMotionSvg />
        </ProjectIcon>
        <span>Framer Motion</span>
      </ProjectBadge>,
      <ProjectBadge key="zod">
        <ProjectIcon>
          <ZodSvg />
        </ProjectIcon>
        <span>Zod</span>
      </ProjectBadge>,
    ],
    images: ['/projects/test-frontend.png'],
    links: {
      website: 'https://test-frontend-dinheirow.vercel.app/',
      github: 'https://github.com/YuriLRodrigues/test-frontend-dinheirow',
    },
  },
  {
    id: 6,
    title: 'Valorant Info Hub',
    description:
      'O Valorant Info Hub é uma plataforma que exibe informações detalhadas sobre o Valorant, incluindo a listagem de agentes, habilidades e estatísticas, além de mapas com detalhes estratégicos. Também apresenta um catálogo completo de armas com suas características, skins disponíveis e outros conteúdos do jogo, proporcionando uma experiência completa para os jogadores.',
    technologies: [
      <ProjectBadge key="next">
        <ProjectIcon>
          <NextSvg />
        </ProjectIcon>
        <span>Next.js</span>
      </ProjectBadge>,
      <ProjectBadge key="tailwind">
        <ProjectIcon>
          <TailwindCssSvg />
        </ProjectIcon>
        <span>Tailwind CSS</span>
      </ProjectBadge>,
      <ProjectBadge key="react">
        <ProjectIcon>
          <ReactSvg />
        </ProjectIcon>
        <span>React</span>
      </ProjectBadge>,
      <ProjectBadge key="typescript">
        <ProjectIcon>
          <TypescriptSvg />
        </ProjectIcon>
        <span>TypeScript</span>
      </ProjectBadge>,
      <ProjectBadge key="zod">
        <ProjectIcon>
          <ZodSvg />
        </ProjectIcon>
        <span>Zod</span>
      </ProjectBadge>,
      <ProjectBadge key="vitest">
        <ProjectIcon>
          <ViteSvg />
        </ProjectIcon>
        <span>Vitest</span>
      </ProjectBadge>,
      <ProjectBadge key="eslint">
        <ProjectIcon>
          <EslintSvg />
        </ProjectIcon>
        <span>Eslint</span>
      </ProjectBadge>,
      <ProjectBadge key="prettier">
        <ProjectIcon>
          <PrettierSvg />
        </ProjectIcon>
        <span>Prettier</span>
      </ProjectBadge>,
    ],
    images: ['/projects/valorant.png'],
    links: {
      website: 'https://valorant-gg.vercel.app/',
      github: 'https://github.com/YuriLRodrigues/valorant',
    },
  },
  {
    id: 7,
    title: 'Fast King - Mobile First Platform',
    description:
      'Clone do McDonalds onde é possível fazer pedidos, visualizar lojas disponíveis, acessar o histórico de pedidos, explorar o cardápio completo e personalizar opções. Esse projeto foi desenvolvido em uma responsividade unicamente para dispositivos mobile, simulando um app.',
    technologies: [
      <ProjectBadge key="next">
        <ProjectIcon>
          <NextSvg />
        </ProjectIcon>
        <span>Next.js</span>
      </ProjectBadge>,
      <ProjectBadge key="tailwind">
        <ProjectIcon>
          <TailwindCssSvg />
        </ProjectIcon>
        <span>Tailwind CSS</span>
      </ProjectBadge>,
      <ProjectBadge key="react">
        <ProjectIcon>
          <ReactSvg />
        </ProjectIcon>
        <span>React</span>
      </ProjectBadge>,
      <ProjectBadge key="typescript">
        <ProjectIcon>
          <TypescriptSvg />
        </ProjectIcon>
        <span>TypeScript</span>
      </ProjectBadge>,
      <ProjectBadge key="prisma">
        <ProjectIcon>
          <PrismaSvg />
        </ProjectIcon>
        <span>Prisma</span>
      </ProjectBadge>,
      <ProjectBadge key="postgresql">
        <ProjectIcon>
          <PostgreSqlSvg />
        </ProjectIcon>
        <span>PostgreSQL</span>
      </ProjectBadge>,
      <ProjectBadge key="zod">
        <ProjectIcon>
          <ZodSvg />
        </ProjectIcon>
        <span>Zod</span>
      </ProjectBadge>,
      <ProjectBadge key="hook-form">
        <ProjectIcon>
          <HookFormSvg />
        </ProjectIcon>
        <span>Hook Form</span>
      </ProjectBadge>,
      <ProjectBadge key="react-query">
        <ProjectIcon>
          <ReactQuerySvg />
        </ProjectIcon>
        <span>React Query</span>
      </ProjectBadge>,
      <ProjectBadge key="framer-motion">
        <ProjectIcon>
          <FramerMotionSvg />
        </ProjectIcon>
        <span>Framer Motion</span>
      </ProjectBadge>,
      <ProjectBadge key="eslint">
        <ProjectIcon>
          <EslintSvg />
        </ProjectIcon>
        <span>Eslint</span>
      </ProjectBadge>,
      <ProjectBadge key="prettier">
        <ProjectIcon>
          <PrettierSvg />
        </ProjectIcon>
        <span>Prettier</span>
      </ProjectBadge>,
    ],
    images: ['/projects/fast-king.png'],
    links: {
      website: 'https://mcdonalds-clone-yuridev.vercel.app/fsw-donalds',
      github: 'https://github.com/YuriLRodrigues/fast-king',
    },
  },
  {
    id: 8,
    title: 'Portfólio - Antigo',
    description:
      'Este foi o meu portfólio antigo, desenvolvido para apresentar meus projetos e habilidades de forma clara e profissional. Com uma interface simples e objetiva, ele serviu como meu cartão de visitas no início da carreira, destacando minhas principais competências e experiências.',
    technologies: [
      <ProjectBadge key="next">
        <ProjectIcon>
          <NextSvg />
        </ProjectIcon>
        <span>Next.js</span>
      </ProjectBadge>,
      <ProjectBadge key="tailwind">
        <ProjectIcon>
          <TailwindCssSvg />
        </ProjectIcon>
        <span>Tailwind CSS</span>
      </ProjectBadge>,
      <ProjectBadge key="react">
        <ProjectIcon>
          <ReactSvg />
        </ProjectIcon>
        <span>React</span>
      </ProjectBadge>,
      <ProjectBadge key="typescript">
        <ProjectIcon>
          <TypescriptSvg />
        </ProjectIcon>
        <span>TypeScript</span>
      </ProjectBadge>,
      <ProjectBadge key="framer-motion">
        <ProjectIcon>
          <FramerMotionSvg />
        </ProjectIcon>
        <span>Framer Motion</span>
      </ProjectBadge>,
      <ProjectBadge key="eslint">
        <ProjectIcon>
          <EslintSvg />
        </ProjectIcon>
        <span>Eslint</span>
      </ProjectBadge>,
      <ProjectBadge key="prettier">
        <ProjectIcon>
          <PrettierSvg />
        </ProjectIcon>
        <span>Prettier</span>
      </ProjectBadge>,
    ],
    images: ['/projects/portfolio.png'],
    links: {
      website: 'https://yurilrodrigues.vercel.app/',
      github: 'https://github.com/YuriLRodrigues/portfolio-v2',
    },
  },
]
