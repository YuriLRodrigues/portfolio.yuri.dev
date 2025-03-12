import { Skeleton } from '@/components/ui/skeleton'

export const GlobeIconsSkeleton = () => {
  return (
    <div className="relative ml-auto flex size-full w-full max-w-xl items-center justify-center overflow-hidden bg-green-500 sm:px-20 xl:mt-0 xl:justify-end">
      <Skeleton className="mx-auto h-64 w-64 rounded-full sm:h-96 sm:w-96" />
    </div>
  )
}
