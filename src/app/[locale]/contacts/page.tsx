import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import { ShortContactForm } from '@/features/contact-form/ui/short-contact-form';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export default async function ContactsPage() {
  const t = await getTranslations('contacts');

  return (
    <main className="relative flex flex-col gap-[60px] px-[160px] py-[80px] max-md:px-4 max-md:py-[64px]">
      <Image
        src="/images/contacts/hero.jpg"
        alt="contacts"
        fill
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-black/70" />
      <section className="z-10 flex flex-col gap-2.5 text-center">
        <Title>{t('title', { fallback: 'Always Here to Help' })}</Title>
        <Text color="faded">
          {t('text', {
            fallback:
              'Have questions or issues? Reach out. We’re just a message away!',
          })}
        </Text>
      </section>
      <section className="z-10 mx-auto w-[600px] max-md:mx-0 max-md:w-full">
        <ShortContactForm />
      </section>
    </main>
  );
}
