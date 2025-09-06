'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { StepCard } from '@/shared/ui/components/step-card';
import { Button } from '@/shared/ui/kit/button';
import { Title } from '@/shared/ui/kit/title';

const getCards = (t: ReturnType<typeof useTranslations>) => [
  {
    number: '01',
    title: t('cards.0.title', { fallback: 'Register and create your profile' }),
    text: t('cards.0.text', {
      fallback:
        'Sign up with Coinsmax in a few minutes. Registration is free and straightforward, simply complete the form and confirm your account.',
    }),
    imgUrl: '/images/user-essentials/ex-1.jpg',
    color: '#BE00D0',
  },
  {
    number: '02',
    title: t('cards.1.title', { fallback: 'Complete verification' }),
    text: t('cards.1.text', {
      fallback:
        'Depending on the transaction amount, verification may vary. Submitting the required documents ensures compliance with regulations and keeps your exchanges secure.',
    }),
    imgUrl: '/images/user-essentials/ex-2.jpg',
    color: '#FF00A1',
    reverse: true,
  },
  {
    number: '03',
    title: t('cards.2.title', { fallback: 'Link your crypto wallet' }),
    text: t('cards.2.text', {
      fallback:
        'Coinsmax does not hold your funds. To exchange cryptocurrency, connect your personal wallet, we recommend using official Bitcoin or Ethereum wallets, or a trusted multi-currency wallet of your choice.',
    }),
    imgUrl: '/images/user-essentials/ex-3.jpg',
    color: '#FFB42B',
  },
  {
    number: '04',
    title: t('cards.3.title', {
      fallback: 'Choose necessary coins you want to buy or sell',
    }),
    text: t('cards.3.text', {
      fallback:
        'Choose what you need: buy or sell crypto, the coin and exchange.',
    }),
    imgUrl: '/images/user-essentials/ex-4.jpg',
    color: '#C956FF',
    reverse: true,
  },
  {
    number: '05',
    title: t('cards.4.title', {
      fallback: 'Confirm and track your transaction',
    }),
    text: t('cards.4.text', {
      fallback:
        'Once confirmed, the transaction will be processed securely. You can monitor its status in real time.',
    }),
    imgUrl: '/images/user-essentials/ex-5.jpg',
    color: '#FF6B2B',
  },
];

export const HowToExchange = () => {
  const t = useTranslations('userEssentials.howToExchange');

  return (
    <section className="flex flex-col gap-[60px] px-[160px] py-20 max-md:px-4">
      <Title className="text-center">
        {t('title', { fallback: 'How to Exchange with Coinsmax' })}
      </Title>
      <section className="flex flex-col overflow-hidden rounded-4xl">
        {getCards(t).map(item => (
          <StepCard key={item.number} {...item} mobileReverse />
        ))}
      </section>
      <Link href="/registration" className="mx-auto">
        <Button size="md" variant="secondary">
          {t('button', { fallback: 'Exchange with Coinsmax' })}
        </Button>
      </Link>
    </section>
  );
};
