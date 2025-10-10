"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { AnimatedLogo } from "./AnimatedLogo";

interface LogoSlideAnimationProps {
  onSlideComplete?: () => void;
}

export function LogoSlideAnimation({
  onSlideComplete,
}: LogoSlideAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    // Hide the header during animation
    const header = document.querySelector("header");
    if (header) {
      header.style.display = "none";
    }

    return () => {
      // Show the header when component unmounts
      if (header) {
        header.style.display = "block";
      }
    };
  }, []);

  const handleLogoAnimationComplete = () => {
    // Start slide animation after 1 second delay
    setTimeout(() => {
      if (containerRef.current) {
        setIsSliding(true);

        // Get header position (sticky top-0)
        const headerHeight = 56; // h-14 = 56px

        gsap.to(containerRef.current, {
          y: -window.innerHeight / 2 + headerHeight / 2, // Move up to center of header
          scale: 0.7, // Make it smaller for header
          opacity: 0, // Fade out as it moves up
          duration: 1.2,
          ease: "power2.inOut",
          onComplete: () => {
            // Show the header after animation completes
            const header = document.querySelector("header");
            if (header) {
              header.style.display = "block";
            }
            onSlideComplete?.();
          },
        });
      }
    }, 0); // Wait 1 second after typewriter completes
  };

  return (
    <>
      {/* Animated Logo Container */}
      <div
        ref={containerRef}
        className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
        style={{
          background: isSliding ? "transparent" : "rgba(255, 255, 255, 0.95)",
          backdropFilter: isSliding ? "none" : "blur(10px)",
          fontFamily: "var(--font-squada-one)",
        }}
      >
        <AnimatedLogo onAnimationComplete={handleLogoAnimationComplete} />
      </div>
    </>
  );
}
