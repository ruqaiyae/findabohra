import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { FeaturesCarousel } from "@/components/FeaturesCarousel";
import { HowItWorks } from "@/components/HowItWorks";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <FeaturesCarousel />
      <HowItWorks />
    </div>
  );
}
