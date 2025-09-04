'use client';

import Image from 'next/image';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const PageHero = ({
  title,
  description,
  imgUrl,
}: {
  title: string;
  description: string;
  imgUrl: string;
}) => {
  return (
    <section className="relative flex h-[455px] flex-col items-center justify-center gap-2.5 text-center">
      <Image src={imgUrl} alt={title} fill className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-[#161616]/70 to-[#161616]/70" />
      <Title size="7xl" className="z-10">
        {title}
      </Title>
      <Text size="xl" color="faded" className="z-10">
        {description}
      </Text>
    </section>
  );
};
