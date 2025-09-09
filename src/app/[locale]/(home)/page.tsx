import type { Metadata } from 'next';

import {
  ComplianceAndProtection,
  ContactOurTeam,
  Hero,
  HowToGetStarted,
  MeetCoinsmax,
  OurAssistanceHub,
  Tip,
  TrustedBy,
  WhyCoinsmax,
} from './components';

export const metadata: Metadata = {
  title: 'Your Regulated Crypto Exchange  | Coinsmax',
  description:
    'Discover how to exchange Bitcoin and Ethereum for fiat, or vice versa. All transactions are processed in line with regulatory requirements, directly from your wallet.',
  openGraph: {
    title: 'Your Regulated Crypto Exchange  | Coinsmax',
    description:
      'Discover how to exchange Bitcoin and Ethereum for fiat, or vice versa. All transactions are processed in line with regulatory requirements, directly from your wallet.',
  },
  twitter: {
    title: 'Your Regulated Crypto Exchange  | Coinsmax',
    description:
      'Discover how to exchange Bitcoin and Ethereum for fiat, or vice versa. All transactions are processed in line with regulatory requirements, directly from your wallet.',
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <MeetCoinsmax />
      <HowToGetStarted />
      <Tip />
      <WhyCoinsmax />
      <TrustedBy />
      <ComplianceAndProtection />
      <OurAssistanceHub />
      <ContactOurTeam />
    </main>
  );
}
