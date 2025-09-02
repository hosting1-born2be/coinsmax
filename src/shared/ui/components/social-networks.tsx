'use client';

import Link from 'next/link';

import { FacebookIcon } from '@/shared/ui/icons/socials/facebook';
import { InstagramIcon } from '@/shared/ui/icons/socials/instagram';
import { LinkedinIcon } from '@/shared/ui/icons/socials/linkedin';

export const SocialNetworks = () => (
  <div className="flex items-center gap-3">
    <Link href="https://www.instagram.com/">
      <InstagramIcon />
    </Link>
    <Link href="https://www.linkedin.com/">
      <LinkedinIcon />
    </Link>
    <Link href="https://www.facebook.com/">
      <FacebookIcon />
    </Link>
  </div>
);
