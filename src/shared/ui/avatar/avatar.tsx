import clsx from 'clsx';

import { Skeleton } from '../skeleton';

type Size = 'sm' | 'lg';

type Props = {
  avatar: string | null;
  size?: Size;
  isLoading?: boolean;
  className?: string;
};

const sizes = {
  sm: 'w-12 h-12',
  lg: 'w-24 h-24',
};

export const Avatar = ({
  avatar,
  size = 'sm',
  className,
  isLoading,
}: Props) => {
  return (
    <div
      className={clsx(
        'gradient overflow-hidden rounded-full p-0.5',
        sizes[size],
        className,
      )}
    >
      {isLoading && <Skeleton className="h-full w-full rounded-full" />}
      {avatar && !isLoading ? (
        <img
          src={`${import.meta.env.VITE_S3_ENDPOINT}/uploads/${avatar}`}
          className="h-full w-full rounded-full object-cover"
          alt="Аватар пользователя"
          loading="lazy"
        />
      ) : (
        <img
          src="/assets/images/user-avatar.png"
          className="h-full w-full rounded-full object-cover"
          alt="Аватар пользователя"
          loading="lazy"
        />
      )}
    </div>
  );
};
