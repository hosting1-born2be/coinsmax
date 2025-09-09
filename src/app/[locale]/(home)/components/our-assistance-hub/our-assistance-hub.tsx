'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils/cn';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './our-assistance-hub.module.css';

export const OurAssistanceHub = () => {
  const t = useTranslations('home.ourAssistanceHub');

  return (
    <section className="px-[160px] py-[80px] max-md:px-4 max-md:py-16">
      <div
        className={cn(
          st.bg,
          'flex flex-col items-center gap-8 rounded-[48px] p-8',
        )}
      >
        <div className="flex flex-col gap-4 text-center">
          <Title size="5xl">
            {t('title', { fallback: 'Our assistance hub' })}
          </Title>
          <Text
            className="mx-auto w-[644px] max-md:w-full"
            size="xl"
            color="tint"
          >
            {t('text', {
              fallback:
                'We know crypto feels frustrating — that’s why we’ve prepared resources to make things easier.',
            })}
          </Text>
        </div>
        <div className="flex w-full justify-center gap-4 max-md:flex-col">
          <Link href="/qa">
            <Button variant="secondary" className="w-[201px] max-md:w-full">
              {t('button', { fallback: 'Q&A' })}
            </Button>
          </Link>
          <Link href="/crypto-insights">
            <Button variant="glass" className="max-md:w-full">
              {t('button2', { fallback: 'News & Insights' })}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
