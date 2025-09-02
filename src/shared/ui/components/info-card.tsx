'use client';

import Image from 'next/image';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const InfoCard = ({
  imgUrl,
  text,
  title,
}: {
  imgUrl: string;
  title: string;
  text: string;
}) => (
  <article className="flex flex-col gap-8 rounded-4xl bg-[#222] p-8">
    <Image src={imgUrl} alt={title} width={96} height={96} />
    <div className="mb-auto flex flex-col gap-2">
      <Title as="h3" size="3xl">
        {title}
      </Title>
      <Text size="xl" color="faded">
        {text}
      </Text>
    </div>
  </article>
);
