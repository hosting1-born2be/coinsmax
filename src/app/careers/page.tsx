import CareersHero from './components/CareersHero/CareersHero';
import CareersPositions from './components/CareersPositions/CareersPositions';
import CareersSeeRole from './components/CareersSeeRole/CareersSeeRole';
import CareersWhatOffer from './components/CareersWhatOffer/CareersWhatOffer';
import CareersWhyWork from './components/CareersWhyWork/CareersWhyWork';

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <CareersWhyWork />
      <CareersWhatOffer />
      <CareersPositions />
      <CareersSeeRole />
    </>
  );
}
