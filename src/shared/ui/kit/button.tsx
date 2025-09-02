'use client';

import type { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils/cn';

const btnVariants = cva(
  'px-4 py-3 rounded-4xl transition duration-300 ease-in-out cursor-pointer',
  {
    variants: {
      variant: {
        primary: 'bg-[#222] border border-[#222] text-white hover:opacity-70',
        secondary: 'bg-white border border-white text-black hover:opacity-70',
        glass: 'bg-white/10 text-white text-xl font-medium',
      },
      size: {
        sm: 'px-4 py-3 text-base',
        md: 'py-4 px-8 text-xl',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export type ButtonVariants = VariantProps<typeof btnVariants>;

export const Button = ({
  children,
  className,
  variant,
  onClick,
  disabled,
  size,
  fullWidth = false,
  type = 'button',
}: {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
} & ButtonVariants) => {
  return (
    <button
      className={cn(
        btnVariants({ variant, size }),
        fullWidth ? 'w-full' : 'w-max',
        className,
      )}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
