'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils/cn';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getCards = (t: ReturnType<typeof useTranslations>) => [
  {
    number: '01',
    text: t('cards.0', { fallback: 'Create your account in minutes' }),
    imgUrl: '/images/home/get-started-1.jpg',
    color: '#BE00D0',
  },
  {
    number: '02',
    text: t('cards.1', {
      fallback: 'Confirm your identity with quick verification',
    }),
    imgUrl: '/images/home/get-started-2.jpg',
    color: '#FF00A1',
    reverse: true,
  },
  {
    number: '03',
    text: t('cards.2', { fallback: 'Choose currency, crypto and go!' }),
    imgUrl: '/images/home/get-started-3.jpg',
    color: '#FFB42B',
  },
];

export const HowToGetStarted = () => {
  const t = useTranslations('home.howToGetStarted');

  return (
    <section className="flex flex-col items-center gap-15 px-[160px] py-[80px] max-md:px-4 max-md:py-16">
      <Title>{t('title', { fallback: 'How to get started' })}</Title>
      <section className="flex w-full flex-col overflow-hidden rounded-4xl">
        {getCards(t).map(item => (
          <Card key={item.number} {...item} />
        ))}
      </section>
      <Link href="https://exchange.coinsmax.io/register">
        <Button variant="secondary">
          {t('register', { fallback: 'Register' })}
        </Button>
      </Link>
    </section>
  );
};

const Card = ({
  number,
  text,
  imgUrl,
  color,
  reverse = false,
}: {
  number: string;
  text: string;
  imgUrl: string;
  color: string;
  reverse?: boolean;
}) => {
  return (
    <article
      className={cn(
        'flex w-full max-md:flex-col-reverse',
        reverse && 'flex-row-reverse',
      )}
    >
      <section className="flex w-1/2 flex-col gap-8 bg-[#222] p-8 max-md:w-full">
        <span style={{ color }} className="text-[64px] max-md:text-[42px]">
          {number}
        </span>
        <Text size="xl" color="white">
          {text}
        </Text>
      </section>
      <Image
        className="w-1/2 max-md:w-full"
        src={imgUrl}
        alt={imgUrl}
        width={560}
        height={200}
        unoptimized
      />
    </article>
  );
};
