'use client';

import type { PropsWithChildren } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils/cn';

const textVariants = cva('transition duration-300 ease-in-out', {
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      md: 'text-md',
      lg: 'text-lg',
      xl: 'text-xl',
    },
    color: {
      white: 'text-white',
      gray: 'text-[#717173]',
      tint: 'text-[#B3B3B5]',
      faded: 'text-[rgba(179,179,181,0.50)]',
    },
    weight: {
      300: 'font-light',
      400: 'font-normal',
      500: 'font-medium',
      600: 'font-semibold',
      700: 'font-bold',
    },
  },
  defaultVariants: {
    size: 'sm',
    color: 'gray',
    weight: 400,
  },
});

export type TextVariants = VariantProps<typeof textVariants>;

export const Text = ({
  children,
  className,
  color,
  size,
  weight,
  capitalize = false,
  uppercase = false,
}: PropsWithChildren<
  TextVariants & {
    className?: string;
    capitalize?: boolean;
    uppercase?: boolean;
  }
>) => (
  <p
    className={cn(
      textVariants({ color, size, weight }),
      className,
      capitalize && 'capitalize',
      uppercase && 'uppercase',
    )}
  >
    {children}
  </p>
);
