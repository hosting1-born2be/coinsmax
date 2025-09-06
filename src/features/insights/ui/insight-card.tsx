'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ArrowRightIcon } from '@/shared/ui/icons/arrow-right';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import type { InsightPreview } from '../model/types';

export const InsightCard = ({
  excerpt,
  slug,
  imgUrl,
  title,
}: InsightPreview) => {
  const t = useTranslations('cryptoInsights');

  return (
    <article className="flex h-full max-w-[544px] flex-col overflow-hidden rounded-4xl border border-white/10 max-md:w-full">
      <Image
        className="h-[250px] w-full object-cover"
        src={imgUrl}
        alt={title}
        width={544}
        height={250}
      />
      <section className="flex h-full flex-col gap-8 bg-[#222] p-8">
        <div className="flex flex-col gap-2">
          <Title size="3xl">{title}</Title>
          <Text size="xl" color="faded">
            {excerpt}
          </Text>
        </div>
        <Link href={`/crypto-insights/${slug}`} className="mt-auto">
          <Text
            size="xl"
            color="white"
            className="flex items-center gap-1.5"
            underline
          >
            {t('read', { fallback: 'Read' })} <ArrowRightIcon />
          </Text>
        </Link>
      </section>
    </article>
  );
};
