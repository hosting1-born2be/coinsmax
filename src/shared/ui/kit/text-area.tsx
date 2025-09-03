'use client';

import type { InputHTMLAttributes } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils/cn';
import { Text } from '@/shared/ui/kit/text';

const textAreaVariants = cva(
  'p-6 rounded-4xl bg-[#222] h-[150px] text-xl resize-none font-light text-white/60 transition duration-300 w-full ease-in-out focus:outline-none',
  {
    variants: {},
    defaultVariants: {},
  },
);

export type TextAreaVariants = VariantProps<typeof textAreaVariants>;

export const TextArea = ({
  className,
  label,
  hint,
  ...args
}: InputHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  hint?: string;
} & TextAreaVariants) => {
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
      <textarea className={cn(textAreaVariants(), className)} {...args} />
    </label>
  );
};
