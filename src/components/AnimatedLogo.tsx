"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";

interface AnimatedLogoProps {
  onAnimationComplete?: () => void;
  className?: string;
}

export function AnimatedLogo({
  onAnimationComplete,
  className = "",
}: AnimatedLogoProps) {
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [displayText, setDisplayText] = useState("");
  const [isTypewriterComplete, setIsTypewriterComplete] = useState(false);

  const text = "FindABohra";
  const typewriterSpeed = 150; // milliseconds per character

  const handleAnimationComplete = useCallback(() => {
    onAnimationComplete?.();
  }, [onAnimationComplete]);

  useEffect(() => {
    if (!logoRef.current || !textRef.current || isTypewriterComplete) return;

    const logo = logoRef.current;
    const textElement = textRef.current;

    // Initial setup - hide elements
    gsap.set(logo, { opacity: 0, scale: 0.8 });
    gsap.set(textElement, { opacity: 0 });

    // Step 1: Logo appears
    gsap.to(logo, {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "back.out(1.7)",
    });

    // Step 2: Show text element and start typewriter
    gsap.to(textElement, {
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
      delay: 0.6, // Start after logo animation
      onComplete: () => {
        // Start typewriter effect
        let currentIndex = 0;
        const typewriterInterval = setInterval(() => {
          if (currentIndex < text.length) {
            setDisplayText(text.slice(0, currentIndex + 1));
            currentIndex++;
          } else {
            clearInterval(typewriterInterval);
            setIsTypewriterComplete(true);
            // Call completion immediately after typewriter finishes
            handleAnimationComplete();
          }
        }, typewriterSpeed);
      },
    });
  }, [handleAnimationComplete, text, typewriterSpeed, isTypewriterComplete]);

  return (
    <div className={`flex items-center ${className}`}>
      <div ref={logoRef} className="flex items-center">
        <Image
          src="/logo.png"
          alt="logo"
          height={50}
          width={50}
          className="w-10 md:w-14 h-auto"
          priority
        />
        <span
          ref={textRef}
          className="text-[#7C2D92] ml-2 text-xl md:text-2xl font-bold"
        >
          {displayText}
        </span>
      </div>
    </div>
  );
}
