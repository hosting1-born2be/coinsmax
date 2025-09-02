'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Divider } from '@/shared/ui/kit/divider';
import { Text } from '@/shared/ui/kit/text';

import { SocialNetworks } from './social-networks';

export const Footer = () => {
  const t = useTranslations('footer');

  return (
    <footer className="flex flex-col gap-8 bg-[#101010] px-[160px] py-[64px] max-md:px-4 max-md:py-8">
      <section className="flex justify-between gap-[96px] max-xl:flex-col">
        <div className="flex w-[315px] flex-col gap-8 max-xl:w-full">
          <div className="flex flex-col gap-3">
            <Image src="/logo.svg" alt="Coinsmax" width={128} height={30} />
            <Text size="base" color="tint">
              {t('subtitle', { fallback: 'Turn Crypto Into Fiat. Anytime.' })}
            </Text>
          </div>
          <Text size="base" color="tint">
            {t('description', {
              fallback:
                'Coinsmax is owned and operated by Limitless Technologies s.r.o, identification number 55165451, authorised to provide virtual currency service, with registered and operational address at Černyševského 1287/10, Bratislava, 851 01, Slovak Republic.',
            })}
          </Text>
          <div className="flex flex-col gap-6">
            <Text color="faded">
              {t('workHours.title', { fallback: 'Work hours' })}
            </Text>
            <div className="flex flex-col gap-3">
              <WorkHours
                label={t('workHours.weekdays', { fallback: 'Weekdays' })}
                value="GMT 06:00–22:00 / EST 01:00–17:00;"
              />
              <WorkHours
                label={t('workHours.weekends', { fallback: 'Weekends' })}
                value="Closed"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-8 max-xl:grid max-xl:grid-cols-2">
          <NavCol
            title={t('customer.title', { fallback: 'Customer' })}
            items={[
              {
                label: t('customer.items.userEssentials', {
                  fallback: 'User Essentials',
                }),
                href: '/user-essentials',
              },
              {
                label: t('customer.items.qa', { fallback: 'Q&A' }),
                href: '/qa',
              },
              {
                label: t('customer.items.cryptoInsights', {
                  fallback: 'Crypto Insights',
                }),
                href: '/crypto-insights',
              },
            ]}
          />
          <NavCol
            title={t('company.title', { fallback: 'Company' })}
            items={[
              {
                label: t('company.items.insideCoinsmax', {
                  fallback: 'Inside Coinsmax',
                }),
                href: '/inside-coinsmax',
              },
              {
                label: t('company.items.partnership', {
                  fallback: 'Partnership',
                }),
                href: '/partnership',
              },
              {
                label: t('company.items.contactUs', { fallback: 'Contact Us' }),
                href: '/contact-us',
              },
            ]}
          />
          <NavCol
            title={t('legal.title', { fallback: 'Legal' })}
            items={[
              {
                label: t('legal.items.termsOfUse', {
                  fallback: 'Terms of Use',
                }),
                href: '/terms-of-use',
              },
              {
                label: t('legal.items.privacyPolicy', {
                  fallback: 'Privacy Policy',
                }),
                href: '/privacy-policy',
              },
              {
                label: t('legal.items.refundPolicy', {
                  fallback: 'Refund Policy',
                }),
                href: '/refund-policy',
              },
              {
                label: t('legal.items.cookiePolicy', {
                  fallback: 'Cookie Policy',
                }),
                href: '/cookie-policy',
              },
            ]}
          />
          <NavCol
            title={t('addresses.title', { fallback: 'Addresses' })}
            items={[
              {
                label: (
                  <>
                    Černyševského 1287/10, <br /> Bratislava, 851 01, Slovak{' '}
                    <br /> Republic
                  </>
                ),
              },
              { label: '+421 233 058 122', href: 'tel:+421 233 058 122' },
              {
                label: 'support@coinsmax.io',
                href: 'mailto:support@coinsmax.io',
              },
            ]}
          />
        </div>
      </section>
      <div className="text-center">
        <Text size="xs" color="tint">
          <span className="font-bold">
            {t('importantNotice.title', { fallback: 'Important Notice:' })}:
          </span>{' '}
          {t('importantNotice.text', {
            fallback:
              'This website and its content are intended only for users outside the United Kingdom. The information presented here is not directed to, or intended for use by, individuals or entities based in the UK. The services offered on Coinsmax.io are not available to UK retail clients. Please note that in the UK, cryptoassets are classified as Restricted Mass Market Investments — a high-risk category that may not be appropriate for most retail investors.',
          })}
        </Text>
      </div>
      <Divider />
      <section className="flex items-center justify-between gap-8 max-md:flex-col">
        <Text color="tint">
          © ${new Date().getFullYear()}{' '}
          {t('copyright', {
            fallback: 'Coinsmax.io — Crypto. Fiat. Exchanged.',
          })}
        </Text>
        <SocialNetworks />
      </section>
    </footer>
  );
};

const WorkHours = ({ label, value }: { label: string; value: string }) => (
  <span className="flex flex-col">
    <Text size="base" color="white">
      {label}
    </Text>
    <Text size="base" color="tint">
      {value}
    </Text>
  </span>
);

const NavCol = ({
  items,
  title,
}: {
  title: string;
  items: { label: ReactNode; href?: string }[];
}) => (
  <div className="flex flex-col gap-6">
    <Text size="base" color="white">
      {title}
    </Text>
    <nav className="flex flex-col gap-3">
      {items.map((item, key) =>
        item.href ? (
          <Link href={item.href} key={item.href}>
            <Text size="base" color="tint" className="hover:text-primary">
              {item.label}
            </Text>
          </Link>
        ) : (
          <Text key={key} size="base" color="tint">
            {item.label}
          </Text>
        ),
      )}
    </nav>
  </div>
);
