import type { Metadata } from 'next';

import { getInsight } from '@/features/insights/api/get-insight';
import { InsightRenderer } from '@/features/insights/ui/insight-renderer';

import { Hero } from './components';

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  const { data } = await getInsight({ slug, locale });

  return {
    title: data.seo_title,
    description: data.seo_description,
    openGraph: {
      title: data.seo_title,
      description: data.seo_description,
    },
    twitter: {
      card: 'summary_large_image',
      title: data.seo_title,
      description: data.seo_description,
    },
  };
}

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
