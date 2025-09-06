'use client';

import { useTranslations } from 'next-intl';

import { InfoCard } from '@/shared/ui/components/info-card';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getCards = (t: ReturnType<typeof useTranslations>) => [
  {
    imgUrl: '/images/user-essentials/v-1.svg',
    title: t('cards.0.title', { fallback: 'Personal Identification' }),
    text: t('cards.0.text', {
      fallback:
        'Government-issued photo identification such as a passport, ID card, driver’s licence, or official residence permit.',
    }),
  },
  {
    imgUrl: '/images/user-essentials/v-2.svg',
    title: t('cards.1.title', { fallback: 'Residential Proof' }),
    text: t('cards.1.text', {
      fallback:
        'Recent documentation confirming your place of residence, e.g. utility statement, bank record, or telecom bill (issued within the past three months).',
    }),
  },
  {
    imgUrl: '/images/user-essentials/v-3.svg',
    title: t('cards.2.title', { fallback: 'Financial Background' }),
    text: t('cards.2.text', {
      fallback:
        'A completed Source of Funds declaration together with supporting evidence to validate the origin of the assets used.',
    }),
  },
  {
    imgUrl: '/images/user-essentials/v-4.svg',
    title: t('cards.3.title', { fallback: 'Verification Procedures' }),
    text: t('cards.3.text', {
      fallback:
        'All identity checks are carried out through accredited third-party providers. In some cases, enhanced due diligence may require an additional questionnaire or a brief video interview.',
    }),
  },
  {
    imgUrl: '/images/user-essentials/v-5.svg',
    title: t('cards.4.title', { fallback: 'Supporting Forms' }),
    text: t('cards.4.text', {
      fallback:
        'Depending on the payment volume, Coinsmax may request short compliance forms related to purchase details or customer experience.',
    }),
  },
];

export const VerificationPackage = () => {
  const t = useTranslations('userEssentials.verificationPackage');

  return (
    <section className="flex flex-col gap-[60px] px-[160px] py-20 max-md:px-4 max-md:py-8">
      <section className="flex flex-col gap-3 text-center">
        <Title>
          {t('title', { fallback: 'Coinsmax Verification Package' })}
        </Title>
        <Text size="xl" className="mx-auto w-[600px] text-center max-md:w-full">
          {t('text', {
            fallback:
              'To ensure every transaction complies with international standards, Coinsmax requires a full KYC package before payments can be processed:',
          })}
        </Text>
      </section>
      <section className="flex flex-col gap-8">
        <div className="flex gap-8 max-md:flex-col">
          {getCards(t)
            .slice(0, 3)
            .map(item => (
              <InfoCard key={item.title} {...item} />
            ))}
        </div>
        <div className="flex gap-8 max-md:flex-col">
          {getCards(t)
            .slice(3, 5)
            .map(item => (
              <InfoCard key={item.title} {...item} />
            ))}
        </div>
      </section>
    </section>
  );
};
