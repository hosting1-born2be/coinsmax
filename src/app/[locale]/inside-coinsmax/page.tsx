import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { PageHero } from '@/shared/ui/components/page-hero';

import { ExchangeWithExperts, WhoWeAre } from './components';

export const metadata: Metadata = {
  title: 'Inside Coinsmax | Coinsmax',
  description:
    'Explore how Coinsmax enables the exchange of Bitcoin and Ethereum for fiat and vice versa. Learn about our vision, values, and the technology that supports direct, wallet-to-wallet transactions.',
  openGraph: {
    title: 'Inside Coinsmax | Coinsmax',
    description:
      'Explore how Coinsmax enables the exchange of Bitcoin and Ethereum for fiat and vice versa. Learn about our vision, values, and the technology that supports direct, wallet-to-wallet transactions.',
  },
  twitter: {
    title: 'Inside Coinsmax | Coinsmax',
    description:
      'Explore how Coinsmax enables the exchange of Bitcoin and Ethereum for fiat and vice versa. Learn about our vision, values, and the technology that supports direct, wallet-to-wallet transactions.',
  },
};

export default async function InsideCoinsmax() {
  const t = await getTranslations('insideCoinsmax.hero');

  return (
    <main>
      <PageHero
        title={t('title', { fallback: 'Welcome to Coinsmax' })}
        description={t('text', {
          fallback:
            'We’re glad you’re here to learn more about who we are, what we stand for, and how we see the future of crypto exchange.',
        })}
        imgUrl="/images/inside/hero.jpg"
      />
      <WhoWeAre />
      <ExchangeWithExperts />
    </main>
  );
}
