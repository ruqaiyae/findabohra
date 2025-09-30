"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Hearts } from "./ui/Hearts";
import FeatureDescription from "./carouselContent/FeatureDescription";
import { carouselItems } from "@/data/carouselData";

const Slide0 = dynamic(() => import("./carouselContent/Slide0"), {
  ssr: false,
});
const Slide1 = dynamic(() => import("./carouselContent/Slide1"), {
  ssr: false,
});
const Slide2 = dynamic(() => import("./carouselContent/Slide2"), {
  ssr: false,
});
const Slide3 = dynamic(() => import("./carouselContent/Slide3"), {
  ssr: false,
});
const Slide4 = dynamic(() => import("./carouselContent/Slide4"), {
  ssr: false,
});
const Slide5 = dynamic(() => import("./carouselContent/Slide5"), {
  ssr: false,
});

export const FeaturesCarousel = React.memo(function FeaturesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  // Preload next slide for smoother transitions
  // Dynamically imports the next slide component to reduce loading time
  useEffect(() => {
    const nextSlide = (currentIndex + 1) % carouselItems.length;

    async function preloadNext() {
      try {
        // Dynamically import the next slide component
        // This ensures the component is loaded before it's needed
        switch (nextSlide) {
          case 0:
            await import("./carouselContent/Slide0");
            break;
          case 1:
            await import("./carouselContent/Slide1");
            break;
          case 2:
            await import("./carouselContent/Slide2");
            break;
          case 3:
            await import("./carouselContent/Slide3");
            break;
          case 4:
            await import("./carouselContent/Slide4");
            break;
          case 5:
            await import("./carouselContent/Slide5");
            break;
        }
      } catch (error) {
        console.error(`Error preloading slide ${nextSlide}:`, error);
      }
    }

    preloadNext();
  }, [currentIndex]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsPaused(true); // Pause when user manually selects a slide

    // Resume auto-play after 5 seconds to give user time to read
    // This prevents the carousel from immediately moving after user interaction
    setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  const currentItem = carouselItems[currentIndex];

  return (
    <section
      id="features"
      className="bg-gradient-to-br from-purple-50 to-pink-50 py-20 relative"
    >
      {/* Decorative hearts */}
      <div className="absolute bottom-5 left-0 z-0">
        <Hearts scale="scale-x-[-1]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Find Your Perfect Match
          </h2>
          <p className="w-[88%] md:w-full mx-auto text-sm md:text-xl text-gray-600 max-w-3xl">
            Thoughtfully designed features that respect our traditions while
            embracing modern convenience.
          </p>
        </div>

        {/* Carousel Content */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {currentItem.id === 0 && <Slide0 />}
          {currentItem.id === 1 && <Slide1 currentItem={currentItem} />}

          {currentItem.id === 2 && <Slide2 currentItem={currentItem} />}

          {currentItem.id === 3 && <Slide3 currentItem={currentItem} />}

          {currentItem.id === 4 && <Slide4 currentItem={currentItem} />}

          {currentItem.id === 5 && <Slide5 currentItem={currentItem} />}

          {/* Right - Feature Description */}
          <FeatureDescription currentItem={currentItem} />
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-12 space-x-3 relative z-10">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              id={`slide-indicator-${index}`}
              onClick={() => {
                goToSlide(index);
              }}
              className={`min-w-3 min-h-3 w-3 h-3 rounded-full transition-all duration-300 ease-in-out touch-manipulation ${
                index === currentIndex
                  ? "bg-[#67295F] scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
});
