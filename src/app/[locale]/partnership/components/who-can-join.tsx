'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getCards = (t: ReturnType<typeof useTranslations>) => [
  {
    imgUrl: '/images/partnership/inf.png',
    title: t('cards.0.title', { fallback: 'Influencers' }),
    text: t('cards.0.text', {
      fallback:
        'Your voice can guide your audience to discover how simple it is to exchange crypto.',
    }),
  },
  {
    imgUrl: '/images/partnership/marketers.png',
    title: t('cards.1.title', { fallback: 'Affiliate Marketers' }),
    text: t('cards.1.text', {
      fallback:
        'Turn your reach into opportunity by introducing your audience to a service designed for crypto payments.',
    }),
  },
  {
    imgUrl: '/images/partnership/media.png',
    title: t('cards.2.title', { fallback: 'Industry Media' }),
    text: t('cards.2.text', {
      fallback:
        'You explain crypto to readers. We offer a trustworthy platform they can use.',
    }),
  },
  {
    imgUrl: '/images/partnership/platforms.png',
    title: t('cards.3.title', { fallback: 'Educational Platforms' }),
    text: t('cards.3.text', {
      fallback:
        'Help learners discover practical crypto tools that simplify payments.',
    }),
  },
  {
    imgUrl: '/images/partnership/developers.png',
    title: t('cards.4.title', { fallback: 'Developers & Fintechs' }),
    text: t('cards.4.text', {
      fallback:
        'If you have a community exploring financial technologies, we provide the crypto payment service that they can apply in practice..',
    }),
  },
];

export const WhoCanJoin = () => {
  const t = useTranslations('partnership.whoCanJoin');

  return (
    <section className="flex flex-col gap-[60px] px-[160px] py-[80px] max-md:px-4 max-md:py-8">
      <section className="flex flex-col gap-2.5 text-center">
        <Title>{t('title', { fallback: 'Who Can Join' })}</Title>
        <Text
          size="xl"
          color="faded"
          className="mx-auto w-[600px] max-md:w-full"
        >
          {t('text', {
            fallback:
              'Coinsmax is open to partners whose followers, readers, or clients are exploring crypto as a payment method:',
          })}
        </Text>
      </section>
      <section className="mx-auto flex flex-col gap-8 max-md:mx-0">
        <div className="flex gap-8 max-lg:flex-col">
          {getCards(t)
            .slice(0, 3)
            .map(item => (
              <Card key={item.imgUrl} {...item} />
            ))}
        </div>
        <div className="mx-auto flex gap-8 max-lg:flex-col max-md:mx-0">
          {getCards(t)
            .slice(3, 5)
            .map(item => (
              <Card key={item.imgUrl} {...item} />
            ))}
        </div>
      </section>
    </section>
  );
};

const Card = ({
  imgUrl,
  title,
  text,
}: {
  imgUrl: string;
  title: string;
  text: string;
}) => {
  return (
    <article className="flex w-full max-w-[352px] flex-col gap-8 rounded-4xl bg-[#222] p-8 max-md:max-w-full">
      <Image
        className="w-full rounded-2xl"
        src={imgUrl}
        alt={title}
        width={288}
        height={150}
        unoptimized
      />
      <section className="flex flex-col gap-2">
        <Title size="3xl">{title}</Title>
        <Text size="xl" color="faded">
          {text}
        </Text>
      </section>
    </article>
  );
};
