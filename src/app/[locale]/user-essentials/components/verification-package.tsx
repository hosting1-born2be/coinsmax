'use client';

import { InfoCard } from '@/shared/ui/components/info-card';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getCards = () => [
  {
    imgUrl: '/images/user-essentials/v-1.svg',
    title: 'Personal Identification',
    text: 'Government-issued photo identification such as a passport, ID card, driver’s licence, or official residence permit.',
  },
  {
    imgUrl: '/images/user-essentials/v-2.svg',
    title: 'Residential Proof',
    text: 'Recent documentation confirming your place of residence, e.g. utility statement, bank record, or telecom bill (issued within the past three months).',
  },
  {
    imgUrl: '/images/user-essentials/v-3.svg',
    title: 'Financial Background',
    text: 'A completed Source of Funds declaration together with supporting evidence to validate the origin of the assets used.',
  },
  {
    imgUrl: '/images/user-essentials/v-4.svg',
    title: 'Verification Procedures',
    text: 'All identity checks are carried out through accredited third-party providers. In some cases, enhanced due diligence may require an additional questionnaire or a brief video interview.',
  },
  {
    imgUrl: '/images/user-essentials/v-5.svg',
    title: 'Supporting Forms',
    text: 'Depending on the payment volume, Coinsmax may request short compliance forms related to purchase details or customer experience.',
  },
];

export const VerificationPackage = () => {
  return (
    <section className="flex flex-col gap-[60px] px-[160px] py-20 max-md:px-4 max-md:py-8">
      <section className="flex flex-col gap-3 text-center">
        <Title>Coinsmax Verification Package</Title>
        <Text size="xl" className="mx-auto w-[600px] text-center max-md:w-full">
          To ensure every transaction complies with international standards,
          Coinsmax requires a full KYC package before payments can be processed:
        </Text>
      </section>
      <section className="flex flex-col gap-8">
        <div className="flex gap-8 max-md:flex-col">
          {getCards()
            .slice(0, 3)
            .map(item => (
              <InfoCard key={item.title} {...item} />
            ))}
        </div>
        <div className="flex gap-8 max-md:flex-col">
          {getCards()
            .slice(3, 5)
            .map(item => (
              <InfoCard key={item.title} {...item} />
            ))}
        </div>
      </section>
    </section>
  );
};
