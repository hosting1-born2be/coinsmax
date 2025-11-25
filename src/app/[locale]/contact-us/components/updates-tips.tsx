'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const UpdatesTips = () => {
  const t = useTranslations('contacts.updatesTips');

  return (
    <section className="flex flex-col gap-[60px] px-[160px] py-[80px] max-md:px-4 max-md:py-16">
      <div className="flex flex-col gap-2.5">
        <Title className="text-center text-[64px] max-md:text-[42px]">
          {t('title.0', { fallback: 'Updates, Tips & Announcements: ' })} <br />
          {t('title.1', { fallback: 'Join Us Online' })}
        </Title>
        <Text size="xl" color="faded" className="text-center">
          {t('text', {
            fallback:
              'Follow us for product updates, practical explanations, and behind-the-scenes information.',
          })}
        </Text>
      </div>
      <div className="flex justify-center gap-8 max-md:flex-col max-md:gap-4">
        <Card href="https://www.instagram.com/coinsmaxio/" title="Instagram">
          <InstEl />
        </Card>
        <Card href="https://www.facebook.com/coinsmaxgroup/" title="Facebook">
          <FbEl />
        </Card>
        <Card
          href="https://www.linkedin.com/company/limitless-technologies-s-r-o/"
          title="Linkedin"
        >
          <LnIcon />
        </Card>
      </div>
    </section>
  );
};

const Card = ({
  title,
  href,
  children,
}: {
  title: string;
  href: string;
  children: ReactNode;
}) => {
  return (
    <Link
      href={href}
      className="flex w-full max-w-[352px] flex-1 flex-col gap-8 rounded-[32px] bg-[#222] p-8 transition duration-300 ease-in-out hover:bg-[#222]/50 max-md:max-w-full"
    >
      {children}
      <div className="flex flex-col gap-4">
        <Title className="text-[32px]">{title}</Title>
        <ArrowIcon />
      </div>
    </Link>
  );
};

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
  >
    <rect width="48" height="48" rx="24" fill="white" />
    <path
      d="M17 24H31M31 24L24 17M31 24L24 31"
      stroke="#1E1E1E"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InstEl = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="96"
    height="96"
    viewBox="0 0 96 96"
    fill="none"
  >
    <path
      d="M0.0001297 79.3806L78.3105 79.3806L78.3105 1.35735L0.000122818 1.35736L0.0001297 79.3806Z"
      fill="url(#paint0_linear_632_1673)"
    />
    <path
      d="M74.7045 52.5652C62.9433 52.5652 53.409 62.0646 53.409 73.7826C53.409 85.5007 62.9434 95 74.7045 95C86.4657 95 96 85.5006 96 73.7826C96 62.0646 86.4657 52.5652 74.7045 52.5652Z"
      fill="url(#paint1_linear_632_1673)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_632_1673"
        x1="78.3105"
        y1="40.369"
        x2="0.0156012"
        y2="40.369"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF00A1" />
        <stop offset="0.11" stopColor="#EB00AF" />
        <stop offset="0.39" stopColor="#BE00D0" />
        <stop offset="0.65" stopColor="#9D00E8" />
        <stop offset="0.86" stopColor="#8900F7" />
        <stop offset="1" stopColor="#8200FD" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_632_1673"
        x1="93.1361"
        y1="84.3851"
        x2="56.3191"
        y2="63.0506"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" stopOpacity="0.3" />
        <stop offset="0.19" stopColor="#FFE4B2" stopOpacity="0.51" />
        <stop offset="0.38" stopColor="#FFCD72" stopOpacity="0.68" />
        <stop offset="0.56" stopColor="#FFBB40" stopOpacity="0.82" />
        <stop offset="0.72" stopColor="#FFAF1D" stopOpacity="0.92" />
        <stop offset="0.88" stopColor="#FFA707" stopOpacity="0.98" />
        <stop offset="1" stopColor="#FFA500" />
      </linearGradient>
    </defs>
  </svg>
);

const FbEl = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="96"
    height="96"
    viewBox="0 0 96 96"
    fill="none"
  >
    <path
      d="M67.7219 19.8213C52.1043 19.8213 39.4438 32.5802 39.4438 48.3189C39.4438 64.0577 52.1043 76.8165 67.7219 76.8165C83.3395 76.8165 96 64.0577 96 48.3189C96 32.5801 83.3395 19.8213 67.7219 19.8213Z"
      fill="url(#paint0_linear_632_1682)"
    />
    <path
      d="M0.00185797 48.1522C0.00185598 25.627 16.6635 7.2979 37.2015 7.2979L66.7696 7.2979C67.0988 7.30053 67.4239 7.37227 67.7241 7.50856C68.0243 7.64486 68.293 7.8427 68.513 8.08949C68.9849 8.61938 69.2424 9.30831 69.2347 10.0202L69.2347 86.2905C69.2527 86.6323 69.2029 86.9743 69.0882 87.2965C68.9735 87.6187 68.7962 87.9146 68.5667 88.1669C68.3371 88.4192 68.06 88.6228 67.7514 88.7658C67.4428 88.9089 67.1091 88.9885 66.7696 89L37.2015 89C26.9325 89 17.6342 84.4242 10.8967 77.0359C3.80914 69.1195 -0.0779751 58.8142 0.00185797 48.1522Z"
      fill="url(#paint1_linear_632_1682)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_632_1682"
        x1="39.4438"
        y1="48.3189"
        x2="96"
        y2="48.3189"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.13" stopColor="white" stopOpacity="0.3" />
        <stop offset="0.33" stopColor="#FFE5BD" stopOpacity="0.51" />
        <stop offset="0.55" stopColor="#FFCC7C" stopOpacity="0.72" />
        <stop offset="0.75" stopColor="#FFBA4C" stopOpacity="0.87" />
        <stop offset="0.9" stopColor="#FFAE2F" stopOpacity="0.97" />
        <stop offset="1" stopColor="#FFAA24" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_632_1682"
        x1="6.84147"
        y1="24.4042"
        x2="80.8413"
        y2="66.7967"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FB129F" />
        <stop offset="0.15" stopColor="#DF13B1" />
        <stop offset="0.42" stopColor="#B214CE" />
        <stop offset="0.66" stopColor="#9115E3" />
        <stop offset="0.86" stopColor="#7D16EF" />
        <stop offset="1" stopColor="#7616F4" />
      </linearGradient>
    </defs>
  </svg>
);

const LnIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="96"
    height="82"
    viewBox="0 0 96 82"
    fill="none"
  >
    <path
      d="M47.9971 0.00143482C74.594 0.0014351 96.2362 19.7342 96.2362 44.058L96.2362 79.0763C96.2331 79.4662 96.1484 79.8512 95.9875 80.2067C95.8265 80.5622 95.5929 80.8804 95.3015 81.1411C94.6759 81.6999 93.8624 82.0048 93.0218 81.9957L2.96486 81.9957C2.56128 82.0171 2.15745 81.9581 1.77704 81.8223C1.39663 81.6864 1.04724 81.4764 0.749348 81.2046C0.451451 80.9327 0.211014 80.6045 0.0421036 80.239C-0.126807 79.8736 -0.220799 79.4783 -0.234375 79.0763L-0.234375 44.058C-0.234374 31.8961 5.16858 20.8838 13.8924 12.9045C23.2397 4.5105 35.4078 -0.0931164 47.9971 0.00143482Z"
      fill="url(#paint0_linear_632_1692)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_632_1692"
        x1="76.0378"
        y1="8.10178"
        x2="25.7547"
        y2="95.6109"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FB129F" />
        <stop offset="0.15" stopColor="#DF13B1" />
        <stop offset="0.42" stopColor="#B214CE" />
        <stop offset="0.66" stopColor="#9115E3" />
        <stop offset="0.86" stopColor="#7D16EF" />
        <stop offset="1" stopColor="#7616F4" />
      </linearGradient>
    </defs>
  </svg>
);
