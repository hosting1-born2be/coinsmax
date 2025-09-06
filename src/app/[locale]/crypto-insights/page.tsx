import { getInsights } from '@/features/insights/api/get-insights';
import { InsightCard } from '@/features/insights/ui/insight-card';

import { PageHero } from '@/shared/ui/components/page-hero';

export default async function CryptoInsights({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const insights = await getInsights({ locale });

  return (
    <main>
      <PageHero
        imgUrl="/images/insights/hero.jpg"
        title="Crypto Insights"
        description="Essentials you need to know."
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
