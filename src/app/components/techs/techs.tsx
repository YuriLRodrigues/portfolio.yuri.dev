import { ReactElement } from 'react'

import {
  HtmlSvg,
  BootstrapSvg,
  CssSvg,
  CypressSvg,
  DockerSvg,
  EslintSvg,
  ExpressSvg,
  FigmaSvg,
  FramerMotionSvg,
  GitHubSvg,
  GitSvg,
  InsomniaSvg,
  JavascriptSvg,
  JestSvg,
  JiraSvg,
  LinuxSvg,
  NestSvg,
  NextSvg,
  NodeSvg,
  NotionSvg,
  PostgreSqlSvg,
  PrettierSvg,
  PrismaSvg,
  ReactSvg,
  ReactTestingLibrarySvg,
  SassSvg,
  StorybookSvg,
  StyledComponentsSvg,
  SwaggerSvg,
  TailwindCssSvg,
  TrelloSvg,
  TypescriptSvg,
  VercelSvg,
  VisualStudioCodeSvg,
  ViteSvg,
} from '@/components/techs-svg'

export type TechsProps = {
  name: string
  icon: ReactElement
  type: 'front-end' | 'back-end' | 'fullstack' | 'tools'
}

export const techs: TechsProps[] = [
  {
    name: 'Html',
    type: 'front-end',
    icon: <HtmlSvg />,
  },
  {
    name: 'Css',
    type: 'front-end',
    icon: <CssSvg />,
  },
  {
    name: 'Javascript',
    type: 'fullstack',
    icon: <JavascriptSvg />,
  },
  {
    name: 'Typescript',
    type: 'fullstack',
    icon: <TypescriptSvg />,
  },
  {
    name: 'React',
    type: 'front-end',
    icon: <ReactSvg />,
  },
  {
    name: 'NextJS',
    type: 'front-end',
    icon: <NextSvg />,
  },
  {
    name: 'NodeJS',
    type: 'back-end',
    icon: <NodeSvg />,
  },
  {
    name: 'Express',
    type: 'back-end',
    icon: <ExpressSvg />,
  },
  {
    name: 'Framer Motion',
    type: 'front-end',
    icon: <FramerMotionSvg />,
  },
  {
    name: 'Tailwind Css',
    type: 'front-end',
    icon: <TailwindCssSvg />,
  },
  {
    name: 'Styled Components',
    type: 'front-end',
    icon: <StyledComponentsSvg />,
  },
  {
    name: 'PostgreSql',
    type: 'back-end',
    icon: <PostgreSqlSvg />,
  },
  {
    name: 'Prisma',
    type: 'back-end',
    icon: <PrismaSvg />,
  },
  {
    name: 'Vite',
    type: 'front-end',
    icon: <ViteSvg />,
  },
  {
    name: 'Cypress',
    type: 'front-end',
    icon: <CypressSvg />,
  },
  {
    name: 'Docker',
    type: 'back-end',
    icon: <DockerSvg />,
  },
  {
    name: 'React Testing Library',
    type: 'front-end',
    icon: <ReactTestingLibrarySvg />,
  },
  {
    name: 'Jest',
    type: 'fullstack',
    icon: <JestSvg />,
  },
  {
    name: 'Sass',
    type: 'front-end',
    icon: <SassSvg />,
  },
  {
    name: 'Bootstrap',
    type: 'front-end',
    icon: <BootstrapSvg />,
  },
  {
    name: 'Storybook',
    type: 'front-end',
    icon: <StorybookSvg />,
  },
  {
    name: 'NestJS',
    type: 'back-end',
    icon: <NestSvg />,
  },
  {
    name: 'Swagger',
    type: 'back-end',
    icon: <SwaggerSvg />,
  },
  {
    name: 'Linux',
    type: 'tools',
    icon: <LinuxSvg />,
  },
  {
    name: 'Git',
    type: 'tools',
    icon: <GitSvg />,
  },
  {
    name: 'Jira',
    type: 'tools',
    icon: <JiraSvg />,
  },
  {
    name: 'GitHub',
    type: 'tools',
    icon: <GitHubSvg />,
  },
  {
    name: 'Vercel',
    type: 'tools',
    icon: <VercelSvg />,
  },
  {
    name: 'Notion',
    type: 'tools',
    icon: <NotionSvg />,
  },
  {
    name: 'Visual Studio Code',
    type: 'tools',
    icon: <VisualStudioCodeSvg />,
  },
  {
    name: 'Figma',
    type: 'tools',
    icon: <FigmaSvg />,
  },
  {
    name: 'Eslint',
    type: 'tools',
    icon: <EslintSvg />,
  },
  {
    name: 'Prettier',
    type: 'tools',
    icon: <PrettierSvg />,
  },
  {
    name: 'Insomnia',
    type: 'tools',
    icon: <InsomniaSvg />,
  },
  {
    name: 'Trello',
    type: 'tools',
    icon: <TrelloSvg />,
  },
]
