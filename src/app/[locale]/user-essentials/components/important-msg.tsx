'use client';

import type { ReactNode } from 'react';
import { useTranslations } from 'next-intl';

import { BtcIcon } from '@/shared/ui/icons/btc';
import { EthIcon } from '@/shared/ui/icons/eth';
import { QuoteDownIcon } from '@/shared/ui/icons/quote-down';
import { QuoteUpIcon } from '@/shared/ui/icons/quote-up';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const ImportantMsg = () => {
  const t = useTranslations('userEssentials.importantMsg');

  return (
    <section className="flex flex-col gap-[60px] px-[160px] py-[80px] max-md:gap-8 max-md:px-4 max-md:py-8">
      <Title className="text-center">
        {t('title', { fallback: 'Important Message on Wallets' })}
      </Title>
      <div className="relative flex flex-col items-center gap-8 rounded-[48px] bg-[#222] p-8">
        <span className="absolute top-8 left-8 max-md:hidden">
          <QuoteUpIcon />
        </span>
        <span className="absolute right-8 bottom-8 max-md:hidden">
          <QuoteDownIcon />
        </span>
        <div className="flex flex-col items-center gap-4 text-center">
          <Title
            as="h3"
            size="5xl"
            color="white"
            className="max-md:text-[32px]"
          >
            {t('pleaseNote', { fallback: 'Please note' })}
          </Title>
          <Text
            size="xl"
            color="faded"
            className="mx-auto w-[644px] max-lg:w-full"
          >
            {t('text.0', {
              fallback: 'Coinsmax does not provide custody of crypto or fiat.',
            })}{' '}
            <br />
            <br />
            {t('text.1', {
              fallback: 'We operate solely as an exchange service.',
            })}{' '}
            <br />
            {t('text.2', {
              fallback:
                'To manage your assets securely, you may consider creating personal',
            })}{' '}
          </Text>
        </div>
        <div className="z-10 flex gap-4">
          <Chip>
            <BtcIcon />
            <Text size="xl" color="white">
              {t('text.3', { fallback: 'Bitcoin' })}
            </Text>
          </Chip>
          <Chip>
            <EthIcon />
            <Text size="xl" color="white">
              {t('text.4', { fallback: 'Ethereum' })}
            </Text>
          </Chip>
        </div>
      </div>
    </section>
  );
};

const Chip = ({ children }: { children: ReactNode }) => (
  <article className="flex gap-2.5 rounded-4xl bg-white/5 py-2 pr-4 pl-2">
    {children}
  </article>
);
