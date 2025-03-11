import { ReactNode } from 'react'

import {
  CypressSvg,
  DockerSvg,
  JestSvg,
  NestSvg,
  NextSvg,
  NodeSvg,
  PostgreSqlSvg,
  PrismaSvg,
  ReactSvg,
  ReactTestingLibrarySvg,
  StorybookSvg,
  SwaggerSvg,
  TailwindCssSvg,
  TypescriptSvg,
} from '@/components/techs-svg'
import { ReactQuerySvg } from '@/components/techs-svg/react-query'
import { ZustandSvg } from '@/components/techs-svg/zustand'

import { icons } from 'lucide-react'

import { TimelineBadge } from './timeline-badge'
import { TimelineIcon } from './timeline-icon'

export type ProjectType = {
  name: string
  description: string
  technologies?: ReactNode[]
  achievements: string[]
}

export type CareerTimelineProps = {
  company: string
  position: string
  location: string
  startDate: string
  endDate: string | 'Atual'
  type: 'CLT' | 'PJ' | 'Estágio' | 'Freelancer'
  description: string
  projects?: ProjectType[]
  technologies: ReactNode[]
  responsibilities: string[]
  icon: keyof typeof icons
}

export const careerTimelineData: CareerTimelineProps[] = [
  {
    company: 'Agência Molla',
    position: 'Desenvolvedor Fullstack Jr.',
    location: 'São Paulo, SP',
    startDate: 'Jun 2024',
    endDate: 'Fev 2025',
    type: 'PJ',
    description:
      'A Agência Molla é uma empresa focada em planejamento estratégico, visão comercial, criação e tecnologia, para empresas de vários segmentos do mercado.',
    projects: [
      {
        name: 'Sistemas administrativos e dashboards',
        description:
          'Desenvolvimento e manutenção de sistemas administrativos e dashboards para grandes empresas como Kelloggs/Kellanova, Dux Experts, Somos AB Mauri, MZB e LuxRaybn. Fui responsável por criar soluções que permitiam aos usuários enviar fotos de merchandising, que eram então aprovadas por administradores através de um painel administrativo. A partir dessa aprovação, os usuários ganhavam pontos de forma dinâmica, com cálculo diário de seus desempenhos. Esses pontos alimentavam um ranking de premiações, proporcionando um incentivo gamificado e engajador dentro da plataforma. Além disso, otimizei processos e integrei a solução com diversas plataformas para garantir eficiência e facilidade de uso.',
        achievements: [
          'Aumento da autonomia dos administradores, sem depender de intervenção manual dos desenvolvedores no banco de dados.',
          'Aceleração significativa do sistema, reduzindo o tempo de carregamento e melhorando a performance.',
          'Melhoria na agilidade dos processos internos, tornando a administração de aprovações e pontuação mais rápida e eficiente.',
          'Implementações de testes unitários, integração e e2e.',
        ],
      },
    ],
    technologies: [
      <TimelineBadge key="typescript">
        <TimelineIcon>
          <TypescriptSvg />
        </TimelineIcon>
        <span>Typescript</span>
      </TimelineBadge>,
      <TimelineBadge key="next">
        <TimelineIcon>
          <NextSvg />
        </TimelineIcon>
        <span>Next.js</span>
      </TimelineBadge>,
      <TimelineBadge key="react">
        <TimelineIcon>
          <ReactSvg />
        </TimelineIcon>
        <span>React.js</span>
      </TimelineBadge>,
      <TimelineBadge key="nest">
        <TimelineIcon>
          <NestSvg />
        </TimelineIcon>
        <span>Nest.js</span>
      </TimelineBadge>,
      <TimelineBadge key="node">
        <TimelineIcon>
          <NodeSvg />
        </TimelineIcon>
        <span>Node.js</span>
      </TimelineBadge>,
      <TimelineBadge key="prisma">
        <TimelineIcon>
          <PrismaSvg />
        </TimelineIcon>
        <span>Prisma</span>
      </TimelineBadge>,
      <TimelineBadge key="postgre">
        <TimelineIcon>
          <PostgreSqlSvg />
        </TimelineIcon>
        <span>PostgreSQL</span>
      </TimelineBadge>,
      <TimelineBadge key="swagger">
        <TimelineIcon>
          <SwaggerSvg />
        </TimelineIcon>
        <span>Swagger</span>
      </TimelineBadge>,
      <TimelineBadge key="react-query">
        <TimelineIcon>
          <ReactQuerySvg />
        </TimelineIcon>
        <span>React Query</span>
      </TimelineBadge>,
      <TimelineBadge key="zustand">
        <TimelineIcon>
          <ZustandSvg />
        </TimelineIcon>
        <span>Zustand</span>
      </TimelineBadge>,
      <TimelineBadge key="rtl">
        <TimelineIcon>
          <ReactTestingLibrarySvg />
        </TimelineIcon>
        <span>React Testing Library</span>
      </TimelineBadge>,
      <TimelineBadge key="jest">
        <TimelineIcon>
          <JestSvg />
        </TimelineIcon>
        <span>Jest</span>
      </TimelineBadge>,
      <TimelineBadge key="cypress">
        <TimelineIcon>
          <CypressSvg />
        </TimelineIcon>
        <span>Cypress</span>
      </TimelineBadge>,
      <TimelineBadge key="docker">
        <TimelineIcon>
          <DockerSvg />
        </TimelineIcon>
        <span>Docker</span>
      </TimelineBadge>,
    ],
    responsibilities: [
      'Responsável por desenvolver e otimizar aplicações com Next.js, garantindo alta performance e experiência de usuário eficiente.',
      'Implementar soluções de armazenamento com Amazon S3 para arquivos e SendGrid para envio automatizado de e-mails.',
      'Realizar code reviews e mentoria de desenvolvedores júnior.',
      'Colaborar continuamente com equipes de produto e design para priorização de melhorias e alinhamento de objetivos técnicos',
      'Desenvolver testes automatizados com (ex: Jest, Cypress, etc.), melhorando a confiabilidade e qualidade do sistema',
      'Otimizar performance e acessibilidade das aplicações.',
    ],
    icon: 'Building',
  },
  {
    company: 'Dinheirow',
    position: 'Desenvolvedor Frontend Jr. II',
    location: 'Vila Velha, ES',
    startDate: 'Jan 2024',
    endDate: 'Jun 2024',
    type: 'PJ',
    description:
      'A Dinheirow é uma empresa especializada em empréstimos com juros baixos, oferecendo soluções financeiras acessíveis e seguras para seus clientes.',
    projects: [
      {
        name: 'Backoffice',
        description:
          'Desenvolvimento e manutenção do backoffice da Dinheirow, focado na gestão e solicitação de empréstimos com juros baixos. Fui responsável por criar interfaces intuitivas que permitiam aos usuários visualizar detalhes dos empréstimos, consultar históricos, simular novas solicitações e acompanhar o status em tempo real. Além disso, realizei integrações com a API RESTful da empresa em Node.js, garantindo uma comunicação eficiente e segura entre frontend e backend. Para assegurar a qualidade do sistema, implementei testes unitários, validando funcionalidades críticas e melhorando a estabilidade da aplicação.',
        achievements: [
          'Rendimento em atividades com média acima de 70%.',
          'Participação ativa na escrita de documentação e tomada de decisão sobre arquitetura e organização do projeto.',
          'Criação de protótipos de design com Figma.',
          'Implementação de testes automatizados eficientes com Cypress e Jest.',
        ],
      },
    ],
    technologies: [
      <TimelineBadge key="typescript">
        <TimelineIcon>
          <TypescriptSvg />
        </TimelineIcon>
        <span>Typescript</span>
      </TimelineBadge>,
      <TimelineBadge key="next">
        <TimelineIcon>
          <NextSvg />
        </TimelineIcon>
        <span>Next.js</span>
      </TimelineBadge>,
      <TimelineBadge key="react">
        <TimelineIcon>
          <ReactSvg />
        </TimelineIcon>
        <span>React.js</span>
      </TimelineBadge>,
      <TimelineBadge key="tailwind">
        <TimelineIcon>
          <TailwindCssSvg />
        </TimelineIcon>
        <span>TailwindCss</span>
      </TimelineBadge>,
      <TimelineBadge key="storybook">
        <TimelineIcon>
          <StorybookSvg />
        </TimelineIcon>
        <span>Storybook</span>
      </TimelineBadge>,
      <TimelineBadge key="react-query">
        <TimelineIcon>
          <ReactQuerySvg />
        </TimelineIcon>
        <span>React Query</span>
      </TimelineBadge>,
      <TimelineBadge key="zustand">
        <TimelineIcon>
          <ZustandSvg />
        </TimelineIcon>
        <span>Zustand</span>
      </TimelineBadge>,
      <TimelineBadge key="rtl">
        <TimelineIcon>
          <ReactTestingLibrarySvg />
        </TimelineIcon>
        <span>React Testing Library</span>
      </TimelineBadge>,
      <TimelineBadge key="jest">
        <TimelineIcon>
          <JestSvg />
        </TimelineIcon>
        <span>Jest</span>
      </TimelineBadge>,
      <TimelineBadge key="cypress">
        <TimelineIcon>
          <CypressSvg />
        </TimelineIcon>
        <span>Cypress</span>
      </TimelineBadge>,
    ],
    responsibilities: [
      'Arquitetei e implementei soluções de front-end escaláveis usando Next.js e React Query.',
      'Apliquei princípios de arquitetura limpa e metodologia de atomic design',
      'Estabeleci práticas de teste robustas, por meio de testes abrangentes de unidade e integração usando Jest',
      'Desenvolvi estratégias de teste de ponta a ponta usando o Cypress, garantindo a confiabilidade do aplicativo e a experiência do usuário',
      'Colaborei em um ambiente de equipe ágil, participando de revisões de código, planejamento de sprint e discussões técnicas',
    ],
    icon: 'Coins',
  },
]
