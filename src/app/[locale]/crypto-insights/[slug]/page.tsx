import { getInsight } from '@/features/insights/api/get-insight';
import { InsightRenderer } from '@/features/insights/ui/insight-renderer';

import { Hero } from './components';

export default async function CryptoInsightsPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;

  const { data } = await getInsight({ slug, locale });

  return (
    <main>
      <Hero imgUrl={data.imgUrl} />
      <InsightRenderer data={data} />
    </main>
  );
}
