'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getCard = (t: ReturnType<typeof useTranslations>) => [
  {
    title: t('cards.0.title', {
      fallback:
        'When you bring people to our platform, you share in the value they create.',
    }),
    text: t('cards.0.text', {
      fallback: 'Our model is designed to create mutual growth',
    }),
  },
  {
    text: (
      <>
        <span className="font-bold">
          {t('cards.1.0', { fallback: 'Value for users' })}{' '}
        </span>{' '}
        –{' '}
        {t('cards.1.1', {
          fallback: 'they gain access to a clean, compliant crypto platform.',
        })}
      </>
    ),
  },
  {
    text: (
      <>
        <span className="font-bold">
          {t('cards.2.0', { fallback: 'Value for you' })}{' '}
        </span>{' '}
        –{' '}
        {t('cards.2.1', {
          fallback:
            'you receive ongoing rewards based on the activity of the community you help build.',
        })}
      </>
    ),
  },
];

export const OurOffer = () => {
  const t = useTranslations('partnership.ourOffer');

  return (
    <section className="flex flex-col gap-[60px] px-[160px] py-[80px] max-md:px-4 max-md:py-16">
      <section className="flex flex-col gap-2.5 text-center">
        <Title>{t('title', { fallback: 'Our Offer' })}</Title>
        <Text size="xl" color="faded">
          {t('text', {
            fallback:
              'The Coinsmax partnership program is built on a simple idea',
          })}
        </Text>
      </section>
      <section className="flex gap-8 max-md:flex-col">
        <section className="flex w-1/2 flex-col gap-8 max-md:w-full">
          {getCard(t).map((card, i) => (
            <Card key={i} text={card.text} title={card.title} />
          ))}
        </section>
        <Image
          className="h-auto w-1/2 max-md:w-full"
          src="/images/partnership/btc.png"
          alt="our-offer"
          width={544}
          height={528}
          unoptimized
        />
      </section>
    </section>
  );
};

const Card = ({ text, title }: { text: ReactNode; title?: string }) => {
  return (
    <section className="flex flex-col gap-8 rounded-4xl bg-[#222] p-8">
      {title && <Title size="3xl">{title}</Title>}
      <Text color="white" size="xl">
        {text}
      </Text>
    </section>
  );
};
