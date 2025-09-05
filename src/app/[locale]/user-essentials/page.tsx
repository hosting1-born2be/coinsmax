import { PageHero } from '@/shared/ui/components/page-hero';

import {
  DocumentsCannotAccept,
  HowToExchange,
  ImportantMsg,
  VerificationPackage,
} from './components';

export default function UserEssentials() {
  return (
    <main>
      <PageHero
        title="User Essentials"
        description="Everything you need to start using Coinsmax is gathered here."
        imgUrl="/images/user-essentials/hero.jpg"
      />
      <HowToExchange />
      <VerificationPackage />
      <DocumentsCannotAccept />
      <ImportantMsg />
    </main>
  );
}
