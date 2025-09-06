import { getTranslations } from 'next-intl/server';

import { PageHero } from '@/shared/ui/components/page-hero';

import { ApplyNow, HowToJoin, OurOffer, WhoCanJoin } from './components';

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
