'use client';

import { type ReactNode, useId } from 'react';
import type { CheckboxProps } from '@radix-ui/react-checkbox';
import { Indicator, Root } from '@radix-ui/react-checkbox';

import { cn } from '@/shared/lib/utils/cn';
import { CheckIcon } from '@/shared/ui/icons/check';
import { Text } from '@/shared/ui/kit/text';

export const Checkbox = ({
  label,
  onCheckedChange,
  checked = false,
  id,
  intent = 'default',
  ...props
}: {
  label?: ReactNode;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  id?: string;
  intent?: 'default' | 'danger';
} & CheckboxProps) => {
  const generatedId = useId();
  const checkboxId = id ?? generatedId;

  return (
    <div className="flex items-center gap-3">
      <Root
        className={cn(
          'flex h-[24px] w-[24px] flex-shrink-0 cursor-pointer items-center justify-center rounded-lg border bg-[#222] transition-all duration-300 ease-in-out',
          intent === 'danger'
            ? 'border-[#FF3B5E] hover:shadow-[0_0_0_1px_#FF3B5E] focus:shadow-[0_0_0_1px_#FF3B5E]'
            : 'border-[rgba(255,255,255,0.15)] hover:shadow-[rgba(255,255,255,0.15)] focus:shadow-[rgba(255,255,255,0.15)]',
        )}
        id={checkboxId}
        checked={checked}
        onCheckedChange={onCheckedChange}
        {...props}
      >
        <Indicator className="mt-0.5">
          <CheckIcon />
        </Indicator>
      </Root>
      <label htmlFor={checkboxId}>
        <Text size="xl" color="faded" weight={300}>
          {label}
        </Text>
      </label>
    </div>
  );
};
