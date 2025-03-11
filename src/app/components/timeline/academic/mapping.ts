import { AcademicTimelineProps } from './academic-data'

export const statusColors: Record<AcademicTimelineProps['status'], string> = {
  completed: 'border-emerald-500 bg-emerald-50 shadow-emerald-100',
  ongoing: 'border-primary bg-blue-50 shadow-blue-100',
  planned: 'border-gray-300 bg-gray-50 shadow-gray-100',
}

export const typeColors: Record<AcademicTimelineProps['type'], string> = {
  Graduation: 'bg-purple-100 text-purple-800 border-purple-200',
  Course: 'bg-blue-100 text-blue-800 border-blue-200',
  Certification: 'bg-amber-100 text-amber-800 border-amber-200',
  Specialization: 'bg-emerald-100 text-emerald-800 border-emerald-200',
}

export const dateColors: Record<AcademicTimelineProps['status'], string> = {
  completed: 'bg-emerald-500 text-white',
  ongoing: 'bg-primary text-white',
  planned: 'bg-gray-300 text-gray-700',
}

export const typeLabels: Record<AcademicTimelineProps['type'], string> = {
  Graduation: 'Graduação',
  Course: 'Curso',
  Certification: 'Certificação',
  Specialization: 'Especialização',
}
