import clsx from 'clsx';

type Props = {
  label?: string;
  description?: string;
  className?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const TextField = ({
  label,
  description,
  error,
  className,
  ...props
}: Props) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-base font-medium" htmlFor={props.id}>
          {label}
        </label>
      )}
      <input
        className={clsx(
          'dark:bg-dark-light block w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-2.5 text-sm dark:border-gray-200/3',
          'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25',
          className,
        )}
        {...props}
      />
      {description && !error && (
        <p className="text-sm text-gray-500">{description}</p>
      )}
      {error && <p className="text-danger text-sm">{error}</p>}
    </div>
  );
};
