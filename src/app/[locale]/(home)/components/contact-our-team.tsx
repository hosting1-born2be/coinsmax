'use client';

import Image from 'next/image';

import { ContactForm } from '@/features/contact-form/ui/contact-form';

import { Title } from '@/shared/ui/kit/title';

export const ContactOurTeam = () => {
  return (
    <section className="flex flex-col gap-[60px] px-[160px] py-[80px] max-md:px-4 max-md:py-16">
      <Title className="text-center">Our team is one form away!</Title>
      <section className="flex w-full gap-[60px] max-lg:flex-col">
        <section className="w-1/2 max-lg:w-full">
          <ContactForm />
        </section>
        <Image
          className="w-1/2 rounded-4xl object-cover max-lg:w-full"
          src="/images/home/contact.jpg"
          alt="contact-img"
          width={530}
          height={760}
          unoptimized
        />
      </section>
    </section>
  );
};
