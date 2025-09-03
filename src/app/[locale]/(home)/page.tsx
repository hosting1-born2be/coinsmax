import {
  ComplianceAndProtection,
  ContactOurTeam,
  Hero,
  HowToGetStarted,
  ImportantNotice,
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
      <ImportantNotice />
      <WhyCoinsmax />
      <TrustedBy />
      <ComplianceAndProtection />
      <OurAssistanceHub />
      <ContactOurTeam />
    </main>
  );
}
