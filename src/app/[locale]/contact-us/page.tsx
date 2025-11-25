import type { Metadata } from 'next';

import { Banner, Hero, ResourceHub, UpdatesTips } from './components';

export const metadata: Metadata = {
  title: 'Contacts | Coinsmax',
  description:
    'Get in touch with Coinsmax for support, inquiries, or assistance with exchange of crypto. Reach out and receive fast, helpful guidance.',
  openGraph: {
    title: 'Contacts | Coinsmax',
    description:
      'Get in touch with Coinsmax for support, inquiries, or assistance with exchange of crypto. Reach out and receive fast, helpful guidance.',
  },
  twitter: {
    title: 'Contacts | Coinsmax',
    description:
      'Get in touch with Coinsmax for support, inquiries, or assistance with exchange of crypto. Reach out and receive fast, helpful guidance.',
  },
};

export default function ContactsPage() {
  return (
    <main>
      <Hero />
      <ResourceHub />
      <UpdatesTips />
      <Banner />
    </main>
  );
}
