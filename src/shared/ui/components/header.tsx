'use client';

import { Text } from '@/shared/ui/kit/text';
import { InstagramIcon } from '@/shared/ui/icons/socials/instagram';
import { FacebookIcon } from '@/shared/ui/icons/socials/facebook';
import { LinkedinIcon } from '@/shared/ui/icons/socials/linkedin';
import { LangSwitcher } from './lang-switcher';
import Image from 'next/image';
import { Button } from '@/shared/ui/kit/button';
import { ThreeLinesIcon } from '@/shared/ui/icons/three-lines';
import { useTranslations } from 'use-intl';

export const Header = () => {
  const t = useTranslations('header');

  return (
    <header className="flex flex-col">
      <section className="flex items-center justify-between gap-[96px] bg-[#101010] px-[130px] py-3">
        <Text>
          <span className="font-bold">
            {t('text.0', { fallback: 'Notice:' })}:
          </span>{' '}
          {t('text.1', {
            fallback:
              'Coinsmax.io services are not available to users based in the United Kingdom. If you are accessing this website from the UK, please exit the site. At this time, our services are not accessible to Retail Clients residing in the UK.',
          })}
        </Text>
        <section className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <InstagramIcon />
            <LinkedinIcon />
            <FacebookIcon />
          </div>
          <LangSwitcher />
        </section>
      </section>
      <section className="flex items-center justify-between border-b border-white/10 bg-[#161616] px-[130px] py-6">
        <Image src="/logo.svg" alt="Coinsmax" width={128} height={30} />
        <div className="flex items-center gap-3">
          <Button>{t('logIn', { fallback: 'Log In' })}</Button>
          <Button variant="secondary">
            {t('signUp', { fallback: 'Sign Up' })}
          </Button>
          <Button>
            <ThreeLinesIcon />
          </Button>
        </div>
      </section>
    </header>
  );
};
