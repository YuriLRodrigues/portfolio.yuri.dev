import { Skeleton } from '@/components/ui/skeleton'

export const PresentationSkeleton = () => {
  return (
    <div className="mx-auto space-y-3 xl:max-w-6xl">
      <h1 className="text-foreground text-4xl font-bold tracking-tight sm:text-6xl">
        <span className="text-gradient uppercase">Em busca contínua de aprimoramento no</span>
        <Skeleton className="h-16 w-full max-w-3xl" />
      </h1>
      <p className="text-muted-foreground mt-6 max-w-4xl text-lg leading-8">
        Desenvolvendo inovações que transformam aspirações em soluções tangíveis, impulsionando o potencial do seu
        negócio além dos limites.
      </p>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <Skeleton className="h-10 w-32 rounded-full" />
        <Skeleton className="h-10 w-32 rounded-full" />
        <Skeleton className="h-10 w-32 rounded-full" />
      </div>
    </div>
  )
}
