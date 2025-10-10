"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { Hearts } from "./ui/Hearts";
import { carouselItems } from "@/data/carouselData";
import Slide0 from "./carouselContent/Slide0";
import Slide1 from "./carouselContent/Slide1";
import Slide2 from "./carouselContent/Slide2";
import Slide3 from "./carouselContent/Slide3";
import Slide4 from "./carouselContent/Slide4";
import Slide5 from "./carouselContent/Slide5";

export const FeaturesCarousel = React.memo(function FeaturesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Animation function for sliding transitions
  const animateSlideTransition = useCallback(
    (newIndex: number) => {
      if (isAnimating || !slideRef.current) return;

      setIsAnimating(true);

      // Slide out current slide to the left
      gsap.to(slideRef.current, {
        x: "-100%",
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
          // Update the slide content
          setCurrentIndex(newIndex);

          // Reset position to right (off-screen)
          gsap.set(slideRef.current, { x: "100%" });

          // Slide in new slide from the right
          gsap.to(slideRef.current, {
            x: "0%",
            duration: 0.8,
            ease: "power2.inOut",
            onComplete: () => {
              setIsAnimating(false);
            },
          });
        },
      });
    },
    [isAnimating]
  );

  // Initial animation on mount
  useEffect(() => {
    if (slideRef.current) {
      gsap.set(slideRef.current, { x: "100%" });
      gsap.to(slideRef.current, {
        x: "0%",
        duration: 0.8,
        ease: "power2.inOut",
      });
    }
  }, []);

  useEffect(() => {
    if (isPaused || isAnimating) return;

    const interval = setInterval(() => {
      const nextIndex =
        currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1;
      animateSlideTransition(nextIndex);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [isPaused, isAnimating, currentIndex, animateSlideTransition]);

  const goToSlide = (index: number) => {
    if (index === currentIndex || isAnimating) return;

    animateSlideTransition(index);
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
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Find Your Perfect Match
          </h2>
          <p className="w-[88%] md:w-full mx-auto text-sm md:text-xl text-gray-600 max-w-3xl">
            Thoughtfully designed features that respect our traditions while
            embracing modern convenience.
          </p>
        </div>

        {/* Slide Container with Animation */}
        <div className="relative overflow-hidden">
          <div ref={slideRef} className="w-full">
            {(() => {
              const slides = [Slide0, Slide1, Slide2, Slide3, Slide4, Slide5];
              const CurrentSlide = slides[currentIndex];
              return <CurrentSlide currentItem={currentItem} />;
            })()}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center space-x-3 relative z-10">
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
