'use client';

import type { JSX } from 'react';
import Link from 'next/link';

import { Text } from '@/shared/ui/kit/text';

import { FacebookIcon } from '../icons/socials/facebook';
import { InstagramIcon } from '../icons/socials/instagram';
import { LinkedinIcon } from '../icons/socials/linkedin';

const networks = [
  {
    url: 'https://www.instagram.com/coinsmaxgroup/',
    icon: InstagramIcon,
    text: 'INSTAGRAM',
  },
  {
    url: 'https://www.linkedin.com/company/limitless-technologies-s-r-o/',
    icon: LinkedinIcon,
    text: 'LINKEDIN',
  },
  {
    url: 'https://www.facebook.com/coinsmaxgroup/',
    icon: FacebookIcon,
    text: 'FACEBOOK',
  },
];

export const LongSocialNetworks = () => {
  return (
    <section className="flex items-center gap-10 max-lg:flex-col max-lg:items-start max-lg:gap-2">
      {networks.map(({ url, icon, text }) => (
        <Network key={text} url={url} icon={icon} text={text} />
      ))}
    </section>
  );
};

const Network = ({
  icon: Icon,
  text,
  url,
}: {
  url: string;
  icon: () => JSX.Element;
  text: string;
}) => (
  <Link href={url} className="group flex items-center gap-3">
    <Icon />
    <Text
      size="2xl"
      color="tint"
      className="group-hover:text-primary"
      uppercase
      underline
    >
      {text}
    </Text>
  </Link>
);
