import { Skeleton } from '@/shared/ui/skeleton';

export const CardSkeleton = () => {
  return (
    <div className="pointer-events-none flex w-full max-w-[200px] flex-col gap-2">
      <div className="relative aspect-square overflow-hidden rounded-xl">
        <Skeleton className="h-full w-full" />

        <div className="absolute top-2 right-2 rounded-sm bg-gray-400 px-2.5 py-0.5 text-xs font-semibold text-white dark:bg-gray-600">
          ...
        </div>
      </div>

      <Skeleton className="h-4 w-3/4" />
    </div>
  );
};
