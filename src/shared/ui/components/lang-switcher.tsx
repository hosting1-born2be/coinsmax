'use client';

import { useCallback, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  Root,
} from '@radix-ui/react-dropdown-menu';
import { useTranslations } from 'use-intl';

import { ChevronDownIcon } from '@/shared/ui/icons/chevron-down';
import { Text } from '@/shared/ui/kit/text';

import { CsIcon } from '../icons/countries/cs';
import { DeIcon } from '../icons/countries/de';
import { EnIcon } from '../icons/countries/en';
import { ItIcon } from '../icons/countries/it';
import { TranslationIcon } from '../icons/translation';

export const LangSwitcher = () => {
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const locale = useLocale();
  const t = useTranslations('langSwitcher');

  const switchLanguage = useCallback(
    (value: string) => {
      const segments = pathname.split('/');
      segments[1] = value;
      const newPath = segments.join('/');
      router.replace(newPath);
    },
    [pathname, router],
  );

  const languages = [
    { value: 'en', label: t('english', { fallback: 'English' }), icon: EnIcon },
    { value: 'de', label: t('german', { fallback: 'German' }), icon: DeIcon },
    { value: 'it', label: t('italian', { fallback: 'Italian' }), icon: ItIcon },
    { value: 'cs', label: t('czech', { fallback: 'Czech' }), icon: CsIcon },
  ];

  return (
    <Root open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger className="flex cursor-pointer items-center gap-3 rounded-4xl bg-[#222] px-3 py-1.5 outline-0">
        <div className="flex items-center gap-1.5">
          <TranslationIcon />
          <Text>{languages.find(({ value }) => value === locale)?.label}</Text>
        </div>
        <ChevronDownIcon />
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          sideOffset={10}
          className="z-[900] flex w-[118px] animate-[slideDownAndFade_400ms_cubic-bezier(0.16,1,0.3,1)] flex-col overflow-hidden rounded-2xl bg-[#222] data-[side=bottom]:animate-[slideUpAndFade_400ms_cubic-bezier(0.16,1,0.3,1)] data-[side=left]:animate-[slideRightAndFade_400ms_cubic-bezier(0.16,1,0.3,1)] data-[side=right]:animate-[slideLeftAndFade_400ms_cubic-bezier(0.16,1,0.3,1)] data-[side=top]:animate-[slideDownAndFade_400ms_cubic-bezier(0.16,1,0.3,1)]"
        >
          {languages.map(({ icon: Icon, label, value }) => (
            <DropdownMenuItem
              key={value}
              onClick={() => {
                setOpen(false);
                switchLanguage(value);
              }}
              className="flex cursor-pointer items-center gap-2 border-b border-white/5 p-3 outline-0 last:border-b-0"
            >
              <Icon />
              <p className="text-sm text-[#B3B3B5]">{label}</p>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </Root>
  );
};
