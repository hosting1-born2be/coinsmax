'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Hero = () => {
  const t = useTranslations('contacts.hero');

  return (
    <section className="relative flex flex-col gap-[60px] px-[160px] py-[80px] max-md:px-4 max-md:py-[64px]">
      <Image
        src="/images/contacts/hero.jpg"
        alt="contacts"
        fill
        className="absolute inset-0 object-cover"
      />
      <div className="absolute inset-0 bg-black/70" />
      <section className="z-10 flex flex-col gap-2.5 text-center">
        <Title>{t('title', { fallback: 'Always Here to Help' })}</Title>
        <Text size="xl" color="faded">
          {t('text', {
            fallback:
              'Have questions or issues? Reach out. We’re just a message away!',
          })}
        </Text>
        <Button variant="secondary" className="mx-auto font-medium">
          {t('button', { fallback: 'Open Helpdesk' })}
        </Button>
      </section>
    </section>
  );
};
