'use client';

import Image from 'next/image';
import Link from 'next/link';

import { InfoCard } from '@/shared/ui/components/info-card';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const DocumentsCannotAccept = () => {
  return (
    <section className="flex flex-col gap-[60px] px-[160px] py-20 max-md:px-4">
      <section className="flex flex-col gap-3 text-center">
        <Title>Documents We Cannot Accept</Title>
        <Text size="xl" className="mx-auto w-[600px] text-center max-md:w-full">
          For compliance reasons, Coinsmax can only process valid and verifiable
          documenta
        </Text>
      </section>
      <section className="flex gap-8 max-md:flex-col max-md:gap-4">
        <Image
          className="h-auto w-1/2 rounded-4xl object-cover max-md:h-[358px] max-md:w-full"
          src="/images/user-essentials/doc-hero.jpg"
          alt="hero"
          width={544}
          height={998}
        />
        <section className="flex w-1/2 flex-col gap-8 max-md:w-full max-md:gap-4">
          <InfoCard
            imgUrl="/images/user-essentials/doc-1.svg"
            title="Invalid or fraudulent"
            text="Forged, stolen, or altered identity papers."
          />
          <InfoCard
            imgUrl="/images/user-essentials/doc-2.svg"
            title="Low quality"
            text="Scans or photos that are  blurred, cropped, poorly lit, or otherwise unclear."
          />
          <InfoCard
            imgUrl="/images/user-essentials/doc-3.svg"
            title="Outdated or duplicated"
            text="Expired IDs, or copies of copies instead of original documents."
          />
          <Link href="/registration" className="w-full">
            <Button variant="secondary" size="md" fullWidth>
              Join Us
            </Button>
          </Link>
        </section>
      </section>
    </section>
  );
};
