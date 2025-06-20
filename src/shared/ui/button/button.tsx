import { clsx } from 'clsx';
import { FaSpinner } from 'react-icons/fa';

type Variant = 'primary' | 'secondary' | 'danger' | 'success' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

type Props = {
  variant?: Variant;
  size?: Size;
  isLoading?: boolean;
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const variants: Record<Variant, string> = {
  primary: 'bg-primary hover:bg-primary-hover text-white',
  secondary:
    'bg-transparent border border-primary text-primary hover:bg-primary hover:text-white',
  danger: 'bg-danger hover:bg-opacity-90 text-white',
  success: 'bg-success hover:bg-opacity-90 text-white',
  ghost:
    'bg-transparent text-primary hover:bg-primary hover:text-white hover:bg-opacity-10',
};

const sizes: Record<Size, string> = {
  sm: 'py-2 px-3',
  md: 'py-2.5 px-4',
  lg: 'py-3 px-6',
};

export const Button = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  children,
  className,
  ...props
}: Props) => (
  <button
    className={clsx(
      'flex cursor-pointer items-center justify-center gap-2.5 rounded-lg text-sm font-medium transition-colors duration-200',
      [variants[variant]],
      [sizes[size]],
      className,
      {
        'pointer-events-none': isLoading,
      },
    )}
    disabled={isLoading}
    {...props}
  >
    {isLoading ? <FaSpinner className="animate-spin" size={20} /> : children}
  </button>
);
