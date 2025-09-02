'use client';

import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils/cn';
import { Button } from '@/shared/ui/kit/button';

import st from './hero.module.css';

export const Hero = () => {
  const t = useTranslations('home.hero');

  return (
    <section
      className={cn(
        st.bg,
        'flex h-[800px] flex-col items-center justify-center gap-10 px-4 py-[64px] max-md:h-[600px]',
      )}
    >
      <h1 className={st.defTitle}>
        <span className={st.title}>Coinsmax.</span> <br />
        {t('title', { fallback: 'Where Crypto Meets Fiat.' })}
      </h1>
      <Button variant="secondary">
        {t('button', { fallback: 'Start Now' })}
      </Button>
    </section>
  );
};
