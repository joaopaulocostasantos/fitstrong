import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ModalitySection } from "@/components/sections/ModalitySection";
import { PlansSection } from "@/components/sections/PlansSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <ModalitySection />
      <TestimonialsSection />
      <PlansSection />
      <CtaSection />
    </>
  );
}
