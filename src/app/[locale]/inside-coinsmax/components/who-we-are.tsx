'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';

import { cn } from '@/shared/lib/utils/cn';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const WhoWeAre = () => {
  return (
    <section className="my-[80px] flex gap-8 px-[160px] max-md:my-[64px] max-md:flex-col max-md:px-4">
      <section className="flex w-1/2 flex-col gap-8 max-md:w-full">
        <CardLayout>
          <Title size="5xl">Who We Are</Title>
          <Text size="xl" weight={300}>
            Coinsmax is built by a team of crypto and technology professionals
            united by a single vision: to make digital assets practical in
            everyday life.
          </Text>
        </CardLayout>
        <CardLayout special>
          <Title size="3xl">Our focus</Title>
          <Text size="xl" weight={300}>
            Delivering a straightforward platform for converting Bitcoin and
            Ethereum to fiat currencies, and back again.
          </Text>
        </CardLayout>
        <CardLayout>
          <Text size="xl" weight={300}>
            With backgrounds across finance, compliance, and technology, we
            bring expertise that ensures every transaction is fast, transparent,
            and aligned with global standards.
          </Text>
        </CardLayout>
      </section>
      <Image
        className="w-1/2 object-cover max-md:w-full"
        src="/images/inside/btc.png"
        alt="btc"
        width={544}
        height={660}
        unoptimized
      />
    </section>
  );
};

const CardLayout = ({
  children,
  special,
}: {
  children: ReactNode;
  special?: boolean;
}) => (
  <section
    className={cn(
      'flex flex-col gap-8 rounded-4xl p-8',
      special ? 'border-2 border-white/15 bg-[#2B2B2B]' : 'bg-[#222]',
    )}
  >
    {children}
  </section>
);
