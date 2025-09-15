'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Divider } from '@/shared/ui/kit/divider';
import { Text } from '@/shared/ui/kit/text';

import { WarningIcon } from '../icons/warning-icon';
import { SocialNetworks } from './social-networks';
import { Link } from '@/i18n/navigation';

export const Footer = () => {
  const t = useTranslations('footer');

  return (
    <footer className="flex flex-col gap-8 bg-[#101010] px-[160px] py-[64px] max-md:px-4 max-md:py-8">
      <section className="flex justify-between gap-[96px] max-xl:flex-col">
        <div className="flex w-[315px] flex-col gap-8 max-xl:w-full">
          <div className="flex flex-col gap-3">
            <Image src="/logo.svg" alt="Coinsmax" width={128} height={30} />
            <Text size="base" color="tint">
              {t('subtitle', {
                fallback: 'Coinsmax: Your Gateway to Crypto and Fiat.',
              })}
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
              {t('workHours.title', { fallback: 'Customer support hours' })}
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
                label: t('legal.items.termsAndConditions', {
                  fallback: 'Terms & Conditions',
                }),
                href: '/terms-and-conditions',
              },
              {
                label: t('legal.items.privacyPolicy', {
                  fallback: 'Privacy Policy',
                }),
                href: '/privacy-policy',
              },
              {
                label: t('legal.items.complaintsProcedure', {
                  fallback: 'Complaints Procedure',
                }),
                href: '/complains-procedure',
              },
              {
                label: t('legal.items.cookiePolicy', {
                  fallback: 'Cookie Policy',
                }),
                href: '/cookie-policy',
              },
              {
                label: t('legal.items.riskDisclosure', {
                  fallback: 'Risk Disclosure',
                }),
                href: '/risk-disclosure',
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
      <div className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-[#161616] p-6 text-center">
        <div className="flex items-center gap-3">
          <WarningIcon />
          <Text color="warning" weight={700}>
            {t('importantNotice.title', { fallback: 'Important Notice' })}
          </Text>
        </div>
        <Text color="tint">
          {t('importantNotice.text', {
            fallback:
              'This website and its content are intended only for users outside the United Kingdom. The information presented here is not directed to, or intended for use by, individuals or entities based in the UK. The services offered on Coinsmax.io are not available to UK retail clients. Please note that in the UK, cryptoassets are classified as Restricted Mass Market Investments — a high-risk category that may not be appropriate for most retail investors.',
          })}
        </Text>
      </div>
      <Divider />
      <section className="flex items-center justify-between gap-8 max-md:flex-col">
        <SocialNetworks />
        <Text color="tint">
          © {new Date().getFullYear()}{' '}
          {t('copyright', {
            fallback: 'Coinsmax.io — Crypto. Fiat. Exchanged.',
          })}
        </Text>
        <VisaAndMastercard />
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
  <div className="flex max-w-[140px] flex-col gap-6 max-md:max-w-full">
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

const VisaAndMastercard = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="85"
    height="18"
    viewBox="0 0 85 18"
    fill="none"
  >
    <path
      d="M18.4889 2.26904L15.5273 15.9101H19.1171L21.9888 2.26904H18.4889Z"
      fill="white"
    />
    <path
      d="M13.2839 2.26941L9.60442 11.513L8.07877 3.61557C7.89928 2.71813 7.18135 2.26941 6.4634 2.26941H0.450562L0.36084 2.62841C1.61725 2.89764 2.96343 3.34634 3.86086 3.79506C4.39933 4.06429 4.48904 4.33351 4.66852 4.96172L7.45061 15.8207H11.2198L16.9634 2.17969H13.2839V2.26941Z"
      fill="white"
    />
    <path
      d="M41.1941 2.26904H38.1428C37.4248 2.26904 36.8864 2.62805 36.6172 3.25626L31.3223 15.9101H35.0017L35.7197 13.846H40.2069L40.6556 15.9101H43.8864L41.1941 2.26904ZM36.8864 11.0639L38.771 5.94857L39.8479 11.0639H36.8864Z"
      fill="white"
    />
    <path
      d="M26.6559 6.03847C26.6559 5.58975 27.1047 5.0513 28.1816 4.87181C28.72 4.78207 30.0662 4.78208 31.6816 5.50003L32.3098 2.62822C31.5021 2.35899 30.3354 2 28.9893 2C25.4893 2 23.0662 3.88462 23.0662 6.48719C23.0662 8.46155 24.8611 9.53845 26.1175 10.1667C27.4636 10.7949 27.9124 11.2436 27.9124 11.8718C27.9124 12.7692 26.8354 13.218 25.7585 13.218C23.9636 13.218 22.9764 12.7692 22.1687 12.3205L21.5405 15.2821C22.3482 15.641 23.8739 16 25.4893 16C29.1688 16 31.5918 14.2052 31.5918 11.3334C31.5918 7.92311 26.5662 7.65385 26.6559 6.03847Z"
      fill="white"
    />
    <path
      d="M74.3797 1.92432H66.5073V16.0759H74.3797V1.92432Z"
      fill="#FF5F00"
    />
    <path
      d="M67.0073 9C67.0061 7.6371 67.3148 6.29178 67.9102 5.06588C68.5055 3.83999 69.3719 2.76565 70.4437 1.9242C69.1164 0.880613 67.5224 0.23162 65.8439 0.0514015C64.1654 -0.128817 62.47 0.167006 60.9516 0.905069C59.4332 1.64313 58.153 2.79366 57.2573 4.22513C56.3617 5.6566 55.8867 7.31126 55.8867 9C55.8867 10.6887 56.3617 12.3434 57.2573 13.7749C58.153 15.2063 59.4332 16.3569 60.9516 17.0949C62.47 17.833 64.1654 18.1288 65.8439 17.9486C67.5224 17.7684 69.1164 17.1194 70.4437 16.0758C69.3719 15.2343 68.5056 14.16 67.9102 12.9341C67.3149 11.7082 67.0061 10.3629 67.0073 9Z"
      fill="#EB001B"
    />
    <path
      d="M85.0004 9C85.0004 10.6887 84.5255 12.3434 83.6299 13.7748C82.7343 15.2063 81.4542 16.3568 79.9358 17.0949C78.4174 17.833 76.7221 18.1288 75.0435 17.9486C73.365 17.7684 71.7711 17.1194 70.4438 16.0758C71.5147 15.2335 72.3804 14.159 72.9756 12.9333C73.5709 11.7076 73.8802 10.3627 73.8802 9C73.8802 7.63731 73.5709 6.29241 72.9756 5.06671C72.3804 3.84101 71.5147 2.7665 70.4438 1.9242C71.7711 0.880609 73.365 0.231615 75.0435 0.0513991C76.7221 -0.128817 78.4174 0.167018 79.9358 0.90509C81.4542 1.64316 82.7343 2.79369 83.6299 4.22516C84.5255 5.65663 85.0004 7.31129 85.0004 9Z"
      fill="#F79E1B"
    />
    <path
      d="M84.1421 14.5769V14.2871H84.2589V14.2281H83.9614V14.2871H84.0783V14.5769H84.1421ZM84.7195 14.5769V14.2275H84.6283L84.5235 14.4678L84.4186 14.2275H84.3274V14.5769H84.3917V14.3134L84.4901 14.5405H84.5568L84.6552 14.3128V14.5769H84.7195Z"
      fill="#F79E1B"
    />
  </svg>
);
