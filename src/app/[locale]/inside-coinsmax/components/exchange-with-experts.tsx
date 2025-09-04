'use client';

import Link from 'next/link';

import { InfoCard } from '@/shared/ui/components/info-card';
import { Button } from '@/shared/ui/kit/button';
import { Title } from '@/shared/ui/kit/title';

export const ExchangeWithExperts = () => {
  return (
    <section className="flex flex-col gap-[60px] px-[160px] py-[80px] max-md:px-4 max-md:py-8">
      <Title className="text-center max-md:text-[38px]">
        Exchange with Experts
      </Title>
      <section className="flex gap-8 max-md:flex-col">
        <InfoCard
          imgUrl="/images/inside/ex1.svg"
          text="Coinsmax is operated by a licensed company supported by a qualified team with solid experience in the financial and digital asset sectors."
        />
        <InfoCard
          imgUrl="/images/inside/ex2.svg"
          text="We provide a reliable exchange service for both newcomers to cryptocurrency and those already familiar with the market."
        />
      </section>
      <Link href="/registration" className="mx-auto">
        <Button variant="secondary" size="md">
          Join Us
        </Button>
      </Link>
    </section>
  );
};
