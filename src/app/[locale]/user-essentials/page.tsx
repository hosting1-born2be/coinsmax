import { getTranslations } from 'next-intl/server';

import { PageHero } from '@/shared/ui/components/page-hero';

import {
  DocumentsCannotAccept,
  HowToExchange,
  ImportantMsg,
  VerificationPackage,
} from './components';

export default async function UserEssentials() {
  const t = await getTranslations('userEssentials.hero');

  return (
    <main>
      <PageHero
        title={t('title', { fallback: 'User Essentials' })}
        description={t('text', {
          fallback:
            'Everything you need to start using Coinsmax is gathered here.',
        })}
        imgUrl="/images/user-essentials/hero.jpg"
      />
      <HowToExchange />
      <VerificationPackage />
      <DocumentsCannotAccept />
      <ImportantMsg />
    </main>
  );
}
