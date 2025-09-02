'use client';

import { PropsWithChildren } from 'react';
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
  color,
  size,
  weight,
}: PropsWithChildren<TextVariants>) => (
  <p className={cn(textVariants({ color, size, weight }))}>{children}</p>
);
