'use client';

import { useTranslations } from 'next-intl';

import { DetailedContactForm } from '@/features/contact-form/ui/detailed-contact-form';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const ApplyNow = () => {
  const t = useTranslations('partnership.applyNow');

  return (
    <section className="flex flex-col gap-[60px] px-[160px] py-[80px] max-md:px-4 max-md:py-8">
      <section className="flex flex-col gap-2.5 text-center">
        <Title>{t('title', { fallback: 'Apply Now!' })}</Title>
        <Text size="xl" color="faded">
          {t('text', {
            fallback:
              'Complete the form and get your partner account, promo resources, and direct support.',
          })}
        </Text>
      </section>
      <DetailedContactForm />
    </section>
  );
};
