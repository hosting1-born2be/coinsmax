import { FeatureSection } from "./components/FeatureSection/FeatureSection";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { FormSection } from "./components/FormSection/FormSection";
import { PreviewSection } from "./components/PreviewSection/PreviewSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <PreviewSection />
      <FormSection />
    </>
  );
}
