'use client';

import type { InputHTMLAttributes } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils/cn';
import { Text } from '@/shared/ui/kit/text';

const textFieldVariants = cva(
  'p-6 rounded-4xl bg-[#222] text-xl font-light text-white/60 transition duration-300 w-full ease-in-out focus:outline-none',
  {
    variants: {},
    defaultVariants: {},
  },
);

export type TextFieldVariants = VariantProps<typeof textFieldVariants>;

export const TextField = ({
  className,
  label,
  hint,
  ...args
}: InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: string;
} & TextFieldVariants) => {
  return (
    <label className="relative flex w-full flex-col gap-2">
      <div className="flex items-center gap-1">
        <Text color="white" size="xl" weight={300}>
          {label}
        </Text>
        {hint && (
          <Text color="danger" size="xl" weight={300}>
            ({hint})
          </Text>
        )}
      </div>
      <input className={cn(textFieldVariants(), className)} {...args} />
    </label>
  );
};
