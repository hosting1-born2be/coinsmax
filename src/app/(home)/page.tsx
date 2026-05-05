import HomeFirst from './components/HomeFirst/HomeFirst';
import HomeHero from './components/HomeHero/HomeHero';
import Meet from './components/meet/Meet';

export default function Home() {
  return (
    <main>
      <HomeHero />
      <Meet />
      <HomeFirst />
    </main>
  );
}
