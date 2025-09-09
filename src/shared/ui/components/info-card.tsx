'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';

import { cn } from '@/shared/lib/utils/cn';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const InfoCard = ({
  imgUrl,
  text,
  title,
  alignImage = false,
}: {
  imgUrl: string;
  title?: ReactNode;
  text: string;
  alignImage?: boolean;
}) => (
  <article className="flex flex-1 flex-col gap-8 rounded-4xl bg-[#222] p-8">
    <div className="h-[96px]">
      <Image
        className={cn(alignImage && 'py-auto')}
        src={imgUrl}
        alt="info-img"
        width={96}
        height={96}
        unoptimized
      />
    </div>
    <div className="mb-auto flex flex-col gap-2">
      {title && (
        <Title as="h3" size="3xl">
          {title}
        </Title>
      )}
      <Text size="xl" color="faded">
        {text}
      </Text>
    </div>
  </article>
);
