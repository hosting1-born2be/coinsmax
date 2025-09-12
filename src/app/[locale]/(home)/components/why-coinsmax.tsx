'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { InfoCard } from '@/shared/ui/components/info-card';
import { Button } from '@/shared/ui/kit/button';
import { Title } from '@/shared/ui/kit/title';

const getCards = (t: ReturnType<typeof useTranslations>) => [
  {
    imgUrl: '/images/home/why-1.svg',
    title: (
      <>
        {t('cards.0.title.0', { fallback: 'Simple by' })}
        <br />
        {t('cards.0.title.1', { fallback: 'Design' })}
      </>
    ),
    text: t('cards.0.text', {
      fallback:
        'From sign-up to exchange – everything is clear, minimal, and easy to follow.',
    }),
  },
  {
    imgUrl: '/images/home/why-2.svg',
    title: (
      <>
        {t('cards.1.title.0', { fallback: 'Fast' })}
        <br />
        {t('cards.1.title.1', { fallback: 'Results' })}
      </>
    ),
    text: t('cards.1.text', {
      fallback:
        'Transactions are processed quickly, with no unnecessary steps in between.',
    }),
  },
  {
    imgUrl: '/images/home/why-3.svg',
    title: (
      <>
        {t('cards.2.title.0', { fallback: 'Support That' })}
        <br />
        {t('cards.2.title.1', { fallback: 'Cares' })}
      </>
    ),
    text: t('cards.2.text', {
      fallback:
        'Our team is here to answer, guide, and resolve – whenever you need us.',
    }),
  },
];

export const WhyCoinsmax = () => {
  const t = useTranslations('home.whyCoinsmax');
  const cards = getCards(t);

  return (
    <section className="flex flex-col items-center gap-[60px] px-[160px] py-[80px] max-md:px-4 max-md:py-16">
      <Title>{t('title', { fallback: 'Why Coinsmax' })}</Title>
      <section className="flex gap-8 max-lg:flex-col">
        {cards.map(item => (
          <InfoCard key={item.imgUrl} {...item} />
        ))}
      </section>
      <Link href="https://exchange.coinsmax.io/register">
        <Button variant="secondary">
          {t('button', { fallback: 'Get Started' })}
        </Button>
      </Link>
    </section>
  );
};
