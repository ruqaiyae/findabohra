import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { FeaturesCarousel } from "@/components/FeaturesCarousel";
import { HowItWorks } from "@/components/HowItWorks";
import { CallToAction } from "@/components/CallToAction";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <FeaturesCarousel />
      <HowItWorks />
      <CallToAction />
    </div>
  );
}
