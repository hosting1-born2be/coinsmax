import { getTranslations } from 'next-intl/server';

import { PageHero } from '@/shared/ui/components/page-hero';

import { QASection } from './components';

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
