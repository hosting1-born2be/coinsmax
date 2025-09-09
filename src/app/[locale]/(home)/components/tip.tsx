'use client';

import { useTranslations } from 'next-intl';

import { InfoIcon } from '@/shared/ui/icons/info';
import { QuoteDownIcon } from '@/shared/ui/icons/quote-down';
import { QuoteUpIcon } from '@/shared/ui/icons/quote-up';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import { Link } from '@/i18n/navigation';

export const Tip = () => {
  const t = useTranslations('home.tip');

  return (
    <section className="px-[160px] py-[80px] max-md:px-4 max-md:py-16">
      <section className="flex flex-col rounded-[48px] bg-[#1D1D1D]">
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
          <Link href="/user-essentials">
            <Button variant="secondary">
              {t('button', { fallback: 'Check' })}
            </Button>
          </Link>
          <span className="absolute top-8 left-8 max-md:hidden">
            <QuoteUpIcon />
          </span>
          <span className="absolute right-8 bottom-8 max-md:hidden">
            <QuoteDownIcon />
          </span>
        </div>
        <div className="flex flex-col items-center gap-0.5 px-8 py-4 text-center">
          <Text color="white" className="flex items-center gap-1.5">
            <InfoIcon />
            {t('text2', { fallback: 'Important notice on processing time!' })}
          </Text>
          <Text color="faded" size="base">
            {t('text3', {
              fallback:
                'Most transactions are processed instantly, but timing can depend on the blockchain network and required compliance checks. Coinsmax ensures your transaction is processed in the most reliable way, so you get funds without unnecessary delays.',
            })}
          </Text>
        </div>
      </section>
    </section>
  );
};
