export type AcademicTimelineProps = {
  title: string
  institution: string
  content: React.ReactNode
  type: 'Graduation' | 'Course' | 'Certification' | 'Specialization'
  date: string
  endDate?: string
  status: 'completed' | 'ongoing' | 'planned'
  icon: 'code' | 'degree' | 'certificate'
}

export const academicTimelineData: AcademicTimelineProps[] = [
  {
    title: 'Desenvolvimento Web Full Stack & Mobile',
    institution: 'JStack',
    content:
      'O JStack é uma formação completa que te leva do iniciante ao profissional na Stack JavaScript mais utilizada: Node.js, React e React Native. Com mais de 150 horas de conteúdo, aborda desde fundamentos até tópicos avançados como Docker, bancos SQL/NoSQL, WebSockets, testes, arquitetura escalável e AWS (Lambda e outros serviços). Além das aulas, o curso conta com projetos práticos, quizzes e lives interativas para garantir seu aprendizado e evolução na carreira.',
    type: 'Course',
    date: 'Jan 2025',
    status: 'ongoing',
    icon: 'code',
  },
  {
    title: 'Inglês Básico ao Avançado',
    institution: 'Udemy - Paulo Andrade',
    content:
      'O curso de inglês promete ampliar minha capacidade de comunicação global, permitindo interações mais fluidas em contextos diversos. Espera-se que eu desenvolva habilidades sólidas em fala, audição, leitura e escrita, proporcionando confiança para me expressar eficazmente em ambientes acadêmicos e profissionais. Com isso, pretendo alcançar uma maior fluência no idioma e abrir portas para oportunidades internacionais e crescimento pessoal e profissional.',
    type: 'Course',
    date: 'Jan 2025',
    status: 'planned',
    icon: 'certificate',
  },
  {
    title: 'NestJS Fundamentos',
    institution: 'HCode - Udemy',
    content:
      'O curso especializado em NestJS oferece uma imersão completa na estrutura e funcionalidades do framework para aplicações back-end. Os participantes exploram desde a arquitetura central do NestJS até a implementação avançada de recursos, como testes unitários, de integração e E2E. Além disso, o programa abrange o envio de e-mails e outras funcionalidades fundamentais.',
    type: 'Course',
    date: 'Nov 2023',
    endDate: 'Dez 2023',
    status: 'ongoing',
    icon: 'code',
  },
  {
    title: 'Desenvolvimento Web Full Stack',
    institution: 'One Bit Code',
    content:
      'Desenvolvimento fullstack com foco em tecnologias modernas, abrangendo tanto o front-end quanto o back-end. Experiência sólida com Next.js, React, JavaScript, TypeScript, HTML5, CSS, SASS, Tailwind CSS e Bootstrap, aplicando boas práticas para a criação de interfaces dinâmicas e responsivas. No back-end, domínio de Node.js, Express e MongoDB, para desenvolvimento de APIs. Versionamento e colaboração utilizando Git e GitHub. Formação intensiva com projetos práticos, desde aplicações simples até sistemas completos, consolidando conhecimento em todo o ecossistema web.',
    type: 'Course',
    date: 'Jun 2023',
    endDate: 'Jun 2023',
    status: 'completed',
    icon: 'code',
  },
  {
    title: 'Técnico em informática',
    institution: 'Senac Minas',
    content:
      'O curso Técnico em Informática do Senac Minas proporcionou uma imersão em Python, automações, PowerBI, Office e redes, consolidando meu conhecimento técnico. Além disso, aprimorei habilidades interpessoais como comunicação, trabalho em equipe e sede por aprendizado, destacando-me pela determinação e capacidade de adaptação às demandas dinâmicas do mercado atual.',
    type: 'Course',
    date: 'Out 2021',
    endDate: 'Mai 2023',
    status: 'completed',
    icon: 'code',
  },
]
