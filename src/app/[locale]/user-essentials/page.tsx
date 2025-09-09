import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { PageHero } from '@/shared/ui/components/page-hero';

import {
  DocumentsCannotAccept,
  HowToExchange,
  ImportantMsg,
  VerificationPackage,
} from './components';

export const metadata: Metadata = {
  title: 'User Essentials | Coinsmax',
  description:
    'Learn how to register, verify your identity, and manage your wallet to exchange crypto to fiat and vice versa.',
  openGraph: {
    title: 'User Essentials | Coinsmax',
    description:
      'Learn how to register, verify your identity, and manage your wallet to exchange crypto to fiat and vice versa.',
  },
  twitter: {
    title: 'User Essentials | Coinsmax',
    description:
      'Learn how to register, verify your identity, and manage your wallet to exchange crypto to fiat and vice versa.',
  },
};

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
