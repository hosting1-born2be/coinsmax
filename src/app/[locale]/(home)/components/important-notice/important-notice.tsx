'use client';

import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils/cn';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './important-notice.module.css';

export const ImportantNotice = () => {
  const t = useTranslations('home.importantNotice');

  return (
    <section
      className={cn(
        st.bg,
        'relative flex h-[800px] items-center justify-center px-4 max-md:py-16',
      )}
    >
      <div className="absolute inset-0 z-10 bg-[#161616]/90" />
      <section className="relative z-20 flex flex-col items-center gap-8">
        <div className="mx-auto flex w-[700px] flex-col items-center gap-4 text-center max-lg:w-full">
          <Title>
            {t('title.0', { fallback: 'Important notice on' })} <br />
            {t('title.1', { fallback: 'processing time!' })}
          </Title>
          <Text size="xl" color="faded">
            {t('text', {
              fallback:
                'Most transactions are processed instantly, but timing can depend on the blockchain network and required compliance checks. Coinsmax ensures your transaction is processed in the most reliable way, so you get funds without unnecessary delays.',
            })}
          </Text>
        </div>
        <Button variant="secondary">
          {t('button', { fallback: 'Register' })}
        </Button>
      </section>
    </section>
  );
};
