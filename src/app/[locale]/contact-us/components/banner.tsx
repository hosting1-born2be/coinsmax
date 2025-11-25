'use client';

import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils/cn';
import { Title } from '@/shared/ui/kit/title';

import st from '../../(home)/components/hero/hero.module.css';

export const Banner = () => {
  const t = useTranslations('contacts.banner');

  return (
    <section
      className={cn(
        'relative flex h-[400px] flex-col items-center justify-center px-4',
        st.bg,
      )}
    >
      <Title className="text-center text-[80px] leading-normal max-md:text-[40px]">
        <span className={cn(st.title, 'text-[60px] max-md:text-[32px]')}>
          {t('title.0', { fallback: 'We are here for your crypto journey!' })}
        </span>{' '}
        <br />
        {t('title.1', { fallback: 'Every step of the way.' })}
      </Title>
    </section>
  );
};
