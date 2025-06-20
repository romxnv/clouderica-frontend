interface SkeletonProps {
  className?: string;
}

export const Skeleton = ({ className = '' }: SkeletonProps) => (
  <div
    className={`dark:bg-dark-light animate-pulse rounded bg-gray-200 ${className}`}
  />
);
