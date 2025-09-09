import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { PageHero } from '@/shared/ui/components/page-hero';

import { ApplyNow, HowToJoin, OurOffer, WhoCanJoin } from './components';

export const metadata: Metadata = {
  title: 'Partnership | Coinsmax',
  description:
    'Discover how to join the Coinsmax affiliate program and start earning by referring users. Learn about our benefits, requirements, and how it works.',
  openGraph: {
    title: 'Partnership | Coinsmax',
    description:
      'Discover how to join the Coinsmax affiliate program and start earning by referring users. Learn about our benefits, requirements, and how it works.',
  },
  twitter: {
    title: 'Partnership | Coinsmax',
    description:
      'Discover how to join the Coinsmax affiliate program and start earning by referring users. Learn about our benefits, requirements, and how it works.',
  },
};

export default async function PartnershipPage() {
  const t = await getTranslations('partnership.hero');

  return (
    <main>
      <PageHero
        title={t('title', {
          fallback: 'Partnership Opportunities with Coinsmax',
        })}
        description={t('text', { fallback: 'Earn as you grow with us.' })}
        imgUrl="/images/partnership/hero.jpg"
      />
      <OurOffer />
      <WhoCanJoin />
      <HowToJoin />
      <ApplyNow />
    </main>
  );
}
