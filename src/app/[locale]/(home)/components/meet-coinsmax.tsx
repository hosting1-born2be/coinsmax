'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getCards = (t: ReturnType<typeof useTranslations>) => [
  {
    imgUrl: '/images/home/meet-1.svg',
    text: t('cards.0', {
      fallback:
        'Coinsmax functions as a cryptocurrency exchange, built on clear and regulated processes. Our platform enables the conversion between digital assets and fiat currencies in a transparent environment supported by robust technology.',
    }),
  },
  {
    imgUrl: '/images/home/meet-2.svg',
    text: t('cards.1', {
      fallback:
        'Coinsmax applies a comprehensive safeguard framework designed to counter internal risks and protect data, funds, and transactions. Each transaction undergoes thorough screening and review to maintain the security of the platform and its users.',
    }),
  },
];

export const MeetCoinsmax = () => {
  const t = useTranslations('home.meetCoinsmax');

  return (
    <section className="flex flex-col items-center gap-[60px] px-[160px] py-20 max-md:px-4 max-md:py-16">
      <Title>{t('title', { fallback: 'Meet Coinsmax!' })}</Title>
      <section className="flex gap-8 max-md:flex-col max-md:gap-4">
        {getCards(t).map(item => (
          <Card key={item.imgUrl} {...item} />
        ))}
      </section>
      <Link href="/inside-coinsmax" className="mx-auto">
        <Button variant="secondary">
          {t('button', { fallback: 'Explore Coinsmax' })}
        </Button>
      </Link>
    </section>
  );
};

const Card = ({ imgUrl, text }: { imgUrl: string; text: string }) => (
  <article className="flex w-1/2 flex-col gap-8 rounded-4xl bg-[#222] p-8 max-md:w-full">
    <Image
      className="my-auto"
      src={imgUrl}
      alt={imgUrl}
      width={96}
      height={96}
    />
    <Text size="xl" color="white" className="mt-auto">
      {text}
    </Text>
  </article>
);
