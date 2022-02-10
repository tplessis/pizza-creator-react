import clsx from 'clsx';
import * as React from 'react';

import { Spinner } from '@/components/Elements/Spinner';

const variants = {
  primary: 'bg-green-400 text-green-50 hover:bg-green-500 focus:ring-green-500',
  inverse: 'bg-white text-green-500 hover:bg-green-600:text-green-50 border border-green-400',
};

const sizes = {
  sm: 'p-1 2xl:p-2 text-sm 2xl:text-base',
  md: 'p-2 2xl:p-3 text-base 2xl:text-lg',
  lg: 'p-3 2xl:p-4 text-lg 2xl:text-xl',
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  isLoading?: boolean;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      className = '',
      variant = 'primary',
      size = 'md',
      isLoading = false,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={clsx(
          'rounded font-semibold text-center focus:outline-none focus:ring-2 focus:ring-offset-2',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {isLoading && <Spinner size="sm" className="text-current" />}
        {props.children}
      </button>
    );
  }
);

Button.displayName = 'Button';
