'use client';

import { useTranslations } from 'next-intl';

import { QuoteDownIcon } from '@/shared/ui/icons/quote-down';
import { QuoteUpIcon } from '@/shared/ui/icons/quote-up';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Tip = () => {
  const t = useTranslations('home.tip');

  return (
    <section className="px-[160px] py-[80px] max-md:px-4 max-md:py-16">
      <div className="relative flex flex-col items-center gap-8 rounded-[48px] bg-[#222] p-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <Title as="h3" size="5xl" color="white">
            {t('title', { fallback: 'Tip' })}
          </Title>
          <Text
            size="xl"
            color="faded"
            className="mx-auto w-[644px] max-lg:w-full"
          >
            {t('text', {
              fallback:
                'For a smoother start, check our User Essentials section – it explains the requirements and helps you complete registration and verification faster.',
            })}
          </Text>
        </div>
        <Button variant="secondary">
          {t('button', { fallback: 'Check' })}
        </Button>
        <span className="absolute top-8 left-8 max-md:hidden">
          <QuoteUpIcon />
        </span>
        <span className="absolute right-8 bottom-8 max-md:hidden">
          <QuoteDownIcon />
        </span>
      </div>
    </section>
  );
};
