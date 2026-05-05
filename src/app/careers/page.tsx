import CareersHero from './components/hero/CareersHero';
import CareersPositions from '@/app/careers/components/careersPositions/careersPositions';
import CareersSeeRole from '@/app/careers/components/careersSeeRole/careersSeeRole';
import CareersWhatOffer from '@/app/careers/components/careersWhatOffer/careersWhatOffer';
import CareersWhyWork from '@/app/careers/components/careersWhyWork/CareersWhyWork';

export default function CareersPage() {
  return (
    <main>
      <CareersHero />
      <CareersWhyWork />
      <CareersWhatOffer />
      <CareersPositions />
      <CareersSeeRole />
    </main>
  );
}
