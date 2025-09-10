'use client';

import type { ElementType, JSX, PropsWithChildren } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils/cn';

const titleVariants = cva('transition duration-300 ease-in-out', {
  variants: {
    size: {
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-[32px] max-md:text-[24px]',
      '4xl': 'text-[40px] max-md:text-[32px]',
      '5xl': 'text-5xl',
      '6xl': 'text-[64px] max-md:text-[42px]',
      '7xl': 'text-[80px] max-md:text-[40px]',
    },
    color: {
      white: 'text-white',
    },
    weight: {
      400: 'font-normal',
      500: 'font-medium',
      700: 'font-bold',
    },
  },
  defaultVariants: {
    size: '6xl',
    color: 'white',
    weight: 400,
  },
});

export type TitleVariants = VariantProps<typeof titleVariants>;

export const Title = ({
  children,
  className,
  color,
  weight,
  size,
  as = 'h2',
  capitalize = false,
  style,
}: PropsWithChildren<
  {
    className?: string;
    style?: React.CSSProperties;
    as?: ElementType;
    capitalize?: boolean;
  } & TitleVariants
>) => {
  const Tag = as as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={cn(
        titleVariants({ color, weight, size }),
        capitalize && 'capitalize',
        className,
      )}
      style={style}
    >
      {children}
    </Tag>
  );
};
