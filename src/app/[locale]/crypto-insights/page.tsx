import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { getInsights } from '@/features/insights/api/get-insights';
import { InsightCard } from '@/features/insights/ui/insight-card';

import { PageHero } from '@/shared/ui/components/page-hero';

export const metadata: Metadata = {
  title: 'Crypto Insights | Coinsmax',
  description:
    'Explore the latest articles on cryptocurrency, blockchain, and everyday usage of crypto. Learn, discover, and stay informed with Coinsmax.',
  openGraph: {
    title: 'Crypto Insights | Coinsmax',
    description:
      'Explore the latest articles on cryptocurrency, blockchain, and everyday usage of crypto. Learn, discover, and stay informed with Coinsmax.',
  },
  twitter: {
    title: 'Crypto Insights | Coinsmax',
    description:
      'Explore the latest articles on cryptocurrency, blockchain, and everyday usage of crypto. Learn, discover, and stay informed with Coinsmax.',
  },
};

export default async function CryptoInsights({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const insights = await getInsights({ locale });
  const t = await getTranslations('cryptoInsights.hero');

  return (
    <main>
      <PageHero
        imgUrl="/images/insights/hero.jpg"
        title={t('title', { fallback: 'Crypto Insights' })}
        description={t('description', {
          fallback: 'Essentials you need to know.',
        })}
      />
      <section className="flex justify-center px-[160px] py-[80px] max-md:px-4 max-md:py-16">
        <section className="grid grid-cols-2 gap-8 max-lg:grid-cols-1">
          {insights.data.reverse().map(insight => (
            <InsightCard key={insight.id} {...insight} />
          ))}
        </section>
      </section>
    </main>
  );
}
