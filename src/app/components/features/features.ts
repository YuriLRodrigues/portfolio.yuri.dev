import { icons } from 'lucide-react'

interface Feature {
  title: string
  description: string
  icon: keyof typeof icons
}

export const features: Feature[] = [
  {
    title: 'Design Minimalista',
    description: 'Estética limpa que destaca seu conteúdo.',
    icon: 'Sparkles',
  },
  {
    title: 'Responsivo',
    description: 'Experiência impecável em todos os dispositivos e telas.',
    icon: 'Smartphone',
  },
  {
    title: 'Alto Desempenho',
    description: 'Carregamento ultra rápido para interações fluidas.',
    icon: 'Zap',
  },
  {
    title: 'Acessibilidade',
    description: 'Práticas inclusivas para todos os usuários.',
    icon: 'Accessibility',
  },
  {
    title: 'SEO Otimizado',
    description: 'Estruturado para melhorar seu ranqueamento nos buscadores.',
    icon: 'Search',
  },
  {
    title: 'Tema Personalizável',
    description: 'Escolha entre modo claro, escuro e cores principais personalizadas.',
    icon: 'Moon',
  },
  {
    title: 'Multilíngue',
    description: 'Suporte a múltiplos idiomas para um público global.',
    icon: 'Globe',
  },
  {
    title: 'Código Modular',
    description: 'Arquitetura escalável e organizada para facilitar a manutenção.',
    icon: 'Code',
  },
  {
    title: 'Autenticação Segura',
    description: 'Proteção com JWT para acessos autenticados e seguros.',
    icon: 'Users',
  },
  {
    title: 'API Eficiente',
    description: 'Endpoints REST otimizados para alto desempenho e escalabilidade.',
    icon: 'Layers',
  },
]

export default features
