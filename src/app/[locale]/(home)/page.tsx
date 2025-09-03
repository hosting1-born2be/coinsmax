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
