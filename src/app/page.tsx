import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { FeaturesCarousel } from "@/components/FeaturesCarousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <FeaturesCarousel />
    </div>
  );
}
