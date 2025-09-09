import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { PageHero } from '@/shared/ui/components/page-hero';

import { QASection } from './components';

export const metadata: Metadata = {
  title: 'Q&A – Crypto Exchange | Coinsmax',
  description:
    'Get answers to common questions about exchanging crypto to fiat. Learn how to use Coinsmax, manage wallets, complete KYC, and process payments securely.',
  openGraph: {
    title: 'Q&A – Crypto Exchange | Coinsmax',
    description:
      'Get answers to common questions about exchanging crypto to fiat. Learn how to use Coinsmax, manage wallets, complete KYC, and process payments securely.',
  },
  twitter: {
    title: 'Q&A – Crypto Exchange | Coinsmax',
    description:
      'Get answers to common questions about exchanging crypto to fiat. Learn how to use Coinsmax, manage wallets, complete KYC, and process payments securely.',
  },
};

export default async function QAPage() {
  const t = await getTranslations('qa.hero');

  return (
    <main>
      <PageHero
        imgUrl="/images/qa/hero.jpg"
        title={t('title', { fallback: 'Q＆A' })}
        description={t('description', {
          fallback: 'Answers to your key questions.',
        })}
      />
      <QASection />
    </main>
  );
}
