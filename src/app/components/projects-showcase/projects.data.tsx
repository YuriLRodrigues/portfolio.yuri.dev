import type { ReactNode } from "react";

import {
  NextSvg,
  ReactSvg,
  TailwindCssSvg,
  TypescriptSvg,
} from "@/components/techs-svg";

import { ProjectBadge } from "./project-badge";
import { ProjectIcon } from "./project-icon";

export type Project = {
  id: number;
  title: string;
  description: string;
  technologies: ReactNode[];
  images: string[];
  links: {
    website: string;
    github: string;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    title: "AutoCars - Frontend",
    description:
      "O AutoCars é uma plataforma completa para anúncios de veículos. Ele permite que usuários anunciem, pesquisem e interajam com anúncios de carros, além de favoritar, comentar e gerenciar suas vendas via dashboard.",
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
    ],
    images: [
      "/projects/AutoCars - 2.png",
      "/projects/AutoCars - 3.jpg",
      "/projects/AutoCars - 1.jpg",
    ],
    links: {
      website: "https://autocars-frontend.vercel.app/",
      github: "https://github.com/YuriLRodrigues/autocars-frontend",
    },
  },
  {
    id: 2,
    title: "AutoCars - Backend",
    description:
      "O backend do AutoCars foi construído seguindo princípios de SOLID, DDD e Clean Architecture para garantir modularidade, escalabilidade e fácil manutenção. Utiliza Prisma ORM para acesso ao banco de dados e Autenticação JWT para segurança. No futuro, será expandida com integração de pagamentos e chat entre comprador e vendedor.",
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
      <ProjectBadge key="typescript">
        <ProjectIcon>
          <TypescriptSvg />
        </ProjectIcon>
        <span>TypeScript</span>
      </ProjectBadge>,
    ],
    images: [
      "/projects/AutoCars - 2.png",
      "/projects/AutoCars - 3.jpg",
      "/projects/AutoCars - 1.jpg",
    ],
    links: {
      website:
        "https://yuri-rodrigues-autocars-backend.pd8edx.easypanel.host/swagger/docs",
      github: "https://github.com/YuriLRodrigues/autocars-backend",
    },
  },
];
