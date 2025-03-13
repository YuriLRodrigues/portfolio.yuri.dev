import { Skeleton } from '@/components/ui/skeleton'

export const GlobeIconsSkeleton = () => {
  return (
    <div className="relative mx-auto flex size-full w-full max-w-xl items-center justify-center overflow-hidden pb-20 sm:ml-auto sm:px-20 sm:pb-0 xl:mt-0 xl:justify-end">
      <Skeleton className="mx-auto h-64 w-64 rounded-full sm:h-96 sm:w-96" />
    </div>
  )
}
