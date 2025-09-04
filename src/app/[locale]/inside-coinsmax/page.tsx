import { PageHero } from '@/shared/ui/components/page-hero';

import { ExchangeWithExperts, WhoWeAre } from './components';

export default function InsideCoinsmax() {
  return (
    <main>
      <PageHero
        title="Welcome to Coinsmax"
        description="We’re glad you’re here to learn more about who we are, what we stand for, and how we see the future of crypto exchange."
        imgUrl="/images/inside/hero.jpg"
      />
      <WhoWeAre />
      <ExchangeWithExperts />
    </main>
  );
}
