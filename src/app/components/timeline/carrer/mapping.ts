import { CareerTimelineProps } from './carrer-data'

export const contractColors: Record<CareerTimelineProps['type'], string> = {
  CLT: 'dark:bg-emerald-100 dark:text-emerald-800 dark:border-emerald-200 bg-emerald-400 text-emerald-100 border-emerald-500',
  PJ: 'dark:bg-blue-100 dark:text-blue-800 dark:border-blue-200 bg-blue-400 text-blue-100 border-blue-500',
  Estágio: 'dark:bg-amber-100 dark:text-amber-800 dark:border-amber-200 bg-amber-400 text-amber-100 border-amber-500',
  Freelancer:
    'dark:bg-purple-100 dark:text-purple-800 dark:border-purple-200 bg-purple-400 text-purple-100 border-purple-500',
}

export const cardBackgroundColors: Record<CareerTimelineProps['type'], string> = {
  CLT: 'bg-emerald-100 border-emerald-200 dark:bg-emerald-900 dark:border-emerald-700',
  PJ: 'bg-blue-100 border-blue-200 dark:bg-blue-900 dark:border-blue-700',
  Estágio: 'bg-amber-100 border-amber-200 dark:bg-amber-700 dark:border-amber-700',
  Freelancer: 'bg-purple-100 border-purple-200 dark:bg-purple-900 dark:border-purple-700',
}
