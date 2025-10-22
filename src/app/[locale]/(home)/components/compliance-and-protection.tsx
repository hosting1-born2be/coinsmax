'use client';

import { useTranslations } from 'next-intl';

import { InfoCard } from '@/shared/ui/components/info-card';
import { Title } from '@/shared/ui/kit/title';

const getCards = (t: ReturnType<typeof useTranslations>) => [
  {
    imgUrl: '/images/home/cp-1.svg',
    title: t('cards.0.title', { fallback: 'Verified Users Only' }),
    text: t('cards.0.text', {
      fallback:
        'Document verification is required for all clients. This is a strict requirement for any licensed financial service, and it helps keep the platform compliant and trustworthy.',
    }),
  },
  {
    imgUrl: '/images/home/cp-2.svg',
    title: t('cards.1.title', { fallback: 'Data Kept Private' }),
    text: t('cards.1.text', {
      fallback:
        'Your documents and personal details are stored securely and encrypted — never exposed or shared outside regulated checks.',
    }),
  },
  {
    imgUrl: '/images/home/cp-3.svg',
    title: t('cards.2.title', { fallback: 'Safe Transactions' }),
    text: t('cards.2.text', {
      fallback:
        'Every payment passes through regulated banking channels, giving you clarity and peace of mind with every exchange.',
    }),
  },
  {
    imgUrl: '/images/home/cp-4.svg',
    title: t('cards.3.title', { fallback: 'Helpful Support' }),
    text: t('cards.3.text', {
      fallback:
        'If you have questions during verification or payment, our team is here to guide you step by step.',
    }),
  },
];

export const ComplianceAndProtection = () => {
  const t = useTranslations('home.complianceAndProtection');

  return (
    <section className="flex flex-col items-center gap-[60px] px-[160px] py-[80px] max-md:px-4 max-md:py-16">
      <Title className="text-center">
        {t('title', { fallback: 'Compliance & Protection' })} <br />
        {t('at', { fallback: 'at' })}
      </Title>
      <section className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
        {getCards(t).map(item => (
          <InfoCard key={item.title} {...item} />
        ))}
      </section>
    </section>
  );
};
