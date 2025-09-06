'use client';

import { type ReactNode, useState } from 'react';
import { useTranslations } from 'next-intl';
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  Root,
} from '@radix-ui/react-dropdown-menu';

import { Text } from '@/shared/ui/kit/text';

import { OpenDropdownIcon } from '../icons/open-dropdown';

export type DropdownOptions = { value: string; label: React.ReactNode };

export const Dropdown = ({
  options,
  value,
  onChange,
}: {
  options: DropdownOptions[];
  value?: ReactNode;
  onChange?: (value: string) => void;
}) => {
  const [open, setOpen] = useState(false);

  const t = useTranslations('dropdown');

  return (
    <Root open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger className="flex w-full cursor-pointer items-center justify-between gap-1 rounded-4xl bg-[#222] p-6 outline-0">
        <Text size="xl" color="faded">
          {value
            ? value
            : t('placeholder', { fallback: 'Select your project type' })}
        </Text>
        <OpenDropdownIcon />
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          sideOffset={10}
          className="z-[900] flex min-w-[var(--radix-dropdown-menu-trigger-width)] animate-[slideDownAndFade_400ms_cubic-bezier(0.16,1,0.3,1)] flex-col gap-1 rounded-4xl bg-[#222] data-[side=bottom]:animate-[slideUpAndFade_400ms_cubic-bezier(0.16,1,0.3,1)] data-[side=left]:animate-[slideRightAndFade_400ms_cubic-bezier(0.16,1,0.3,1)] data-[side=right]:animate-[slideLeftAndFade_400ms_cubic-bezier(0.16,1,0.3,1)] data-[side=top]:animate-[slideDownAndFade_400ms_cubic-bezier(0.16,1,0.3,1)]"
        >
          {options.map(option => (
            <DropdownMenuItem
              key={option.value}
              className="relative flex cursor-pointer p-4 transition-all duration-300 ease-in-out outline-none select-none"
              onClick={() => {
                setOpen(false);
                onChange?.(option.value);
              }}
            >
              <Text size="xl" color="faded">
                {option.label}
              </Text>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </Root>
  );
};
