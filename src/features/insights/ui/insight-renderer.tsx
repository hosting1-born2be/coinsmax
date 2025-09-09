'use client';

import { useTranslations } from 'next-intl';

import { Button } from '@/shared/ui/kit/button';
import { Title } from '@/shared/ui/kit/title';

import type { Insight } from '../model/types';
import { InsightStrategies } from './insight-strategies';
import { Link } from '@/i18n/navigation';

export const InsightRenderer = ({ data }: { data: Insight }) => {
  const t = useTranslations('cryptoInsights');

  return (
    <section className="mx-auto flex w-[800px] flex-col py-20 max-md:mx-auto max-md:w-full max-md:px-4">
      <Title size="5xl" as="h1">
        {data.title}
      </Title>
      {data.content.root.children.map((node, i) => (
        <InsightStrategies
          key={String(`node-${i}`)}
          node={node}
          type={node.type}
        />
      ))}
      <section className="mt-[60px] flex items-center justify-center gap-3 max-md:flex-col">
        <Link
          href="https://exchange.coinsmax.io/register"
          className="max-md:w-full"
        >
          <Button
            variant="secondary"
            className="max-md:w-full max-md:justify-center"
          >
            {t('joinNow', { fallback: 'Join Now' })}
          </Button>
        </Link>
        <Link href="/contact-us" className="max-md:w-full">
          <Button className="max-md:w-full max-md:justify-center">
            {t('contactUs', { fallback: 'Contact Us' })}
          </Button>
        </Link>
      </section>
    </section>
  );
};
