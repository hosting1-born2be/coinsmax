'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import { Link } from '@/i18n/navigation';

export const ResourceHub = () => {
  const t = useTranslations('contacts.resourceHub');

  return (
    <section className="relative mx-[160px] my-5 flex flex-col gap-[32px] overflow-hidden rounded-[48px] p-8 max-md:mx-4 max-md:my-[64px] max-md:px-4 max-md:py-[64px]">
      <Image
        src="/images/contacts/resource.jpg"
        alt="resource"
        fill
        unoptimized
        className="absolute inset-0 object-cover brightness-50 grayscale filter"
      />
      <div className="mx-auto flex w-[644px] flex-col gap-4 text-center max-lg:w-full">
        <Title className="z-10 text-[48px] max-md:text-[42px]">
          {t('title', { fallback: 'Your Go-To Resource Hub' })}
        </Title>
        <Text color="gray" size="xl" className="z-10">
          {t('text', {
            fallback:
              'From onboarding steps to exchange walkthroughs — many answers are already here.',
          })}
        </Text>
      </div>
      <div className="z-10 mx-auto flex items-center gap-4 max-md:mx-0 max-md:flex-col">
        <Link href="/crypto-insights" className="max-md:w-full">
          <Button variant="glass" className="w-[201px] max-md:w-full">
            {t('button.0', { fallback: 'Insights' })}
          </Button>
        </Link>
        <Link href="/qa" className="max-md:w-full">
          <Button variant="secondary" className="w-[201px] max-md:w-full">
            {t('button.1', { fallback: 'Q&A' })}
          </Button>
        </Link>
      </div>
    </section>
  );
};
