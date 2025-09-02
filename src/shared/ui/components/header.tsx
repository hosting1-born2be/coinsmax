'use client';

import Image from 'next/image';
import { useTranslations } from 'use-intl';

import { ThreeLinesIcon } from '@/shared/ui/icons/three-lines';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';

import { LangSwitcher } from './lang-switcher';
import { SocialNetworks } from './social-networks';

export const Header = () => {
  const t = useTranslations('header');

  return (
    <header className="flex flex-col">
      <section className="flex items-center justify-between gap-[96px] bg-[#101010] px-[130px] py-3 max-md:px-4">
        <Text>
          <span className="font-bold">
            {t('text.0', { fallback: 'Notice:' })}:
          </span>{' '}
          {t('text.1', {
            fallback:
              'Coinsmax.io services are not available to users based in the United Kingdom. If you are accessing this website from the UK, please exit the site. At this time, our services are not accessible to Retail Clients residing in the UK.',
          })}
        </Text>
        <section className="flex items-center gap-6 max-md:hidden">
          <SocialNetworks />
          <LangSwitcher />
        </section>
      </section>
      <section className="flex items-center justify-between border-b border-white/10 bg-[#161616] px-[130px] py-6 max-md:px-4">
        <Image src="/logo.svg" alt="Coinsmax" width={128} height={30} />
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3 max-md:hidden">
            <Button size="sm">{t('logIn', { fallback: 'Log In' })}</Button>
            <Button variant="secondary" size="sm">
              {t('signUp', { fallback: 'Sign Up' })}
            </Button>
          </div>
          <Button>
            <ThreeLinesIcon />
          </Button>
        </div>
      </section>
    </header>
  );
};
