'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils/cn';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getCards = (t: ReturnType<typeof useTranslations>) => [
  {
    title: {
      value: t('cards.0.title', { fallback: 'Apply' }),
      color: '#BE00D0',
    },
    text: t('cards.0.value', {
      fallback:
        'Fill out the application form below.  We’ll review your request and send you the agreement and KYB requirements.',
    }),
    imgUrl: '/images/partnership/apply.jpg',
  },
  {
    title: {
      value: t('cards.1.title', { fallback: 'Verify' }),
      color: '#FF00A1',
    },
    text: t('cards.1.value', {
      fallback:
        'Submit the requested documents. Once approved, you’ll receive your partner ID and access to your resources.',
    }),
    imgUrl: '/images/partnership/id.jpg',
    reverse: true,
  },
  {
    title: {
      value: t('cards.2.title', { fallback: 'Share' }),
      color: '#FFB42B',
    },
    text: t('cards.2.value', {
      fallback:
        'Promote Coinsmax with your unique link across your platforms and communities.',
    }),
    imgUrl: '/images/partnership/ref.jpg',
  },
  {
    title: {
      value: t('cards.3.title', { fallback: 'Earn' }),
      color: '#C956FF',
    },
    text: t('cards.3.value', {
      fallback:
        'Receive commissions for every invoice payment made by users you bring in. Track everything from your dashboard.',
    }),
    imgUrl: '/images/partnership/earn.jpg',
    reverse: true,
  },
];

export const HowToJoin = () => {
  const t = useTranslations('partnership.howToJoin');

  return (
    <section className="flex flex-col gap-[60px] px-[160px] py-[80px] max-md:px-4 max-md:py-8">
      <Title className="text-center">
        {t('title', { fallback: 'How to Join' })}
      </Title>
      <section className="flex gap-4 max-md:flex-col">
        {getCards(t).map(item => (
          <VerticalCard key={item.title.value} {...item} />
        ))}
      </section>
    </section>
  );
};

const VerticalCard = ({
  title,
  text,
  imgUrl,
  reverse = false,
}: {
  title: {
    value: string;
    color: string;
  };
  text: string;
  imgUrl: string;
  reverse?: boolean;
}) => {
  return (
    <article
      className={cn(
        'flex flex-1 flex-col overflow-hidden rounded-4xl bg-[#222] max-md:flex-col-reverse',
        reverse && 'flex-col-reverse',
      )}
    >
      <section className="flex flex-col gap-2 p-8">
        <Title size="3xl" style={{ color: title.color }}>
          {title.value}
        </Title>
        <Text size="xl" color="faded">
          {text}
        </Text>
      </section>
      <Image
        className={cn(
          'max-h-[341px] w-full object-cover',
          !reverse && 'mt-auto',
        )}
        src={imgUrl}
        alt={title.value}
        width={268}
        height={341}
        unoptimized
      />
    </article>
  );
};
