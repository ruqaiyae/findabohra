"use client";

import { useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const goalBoxRef = useRef<HTMLDivElement>(null);
  const featureCardsRef = useRef<HTMLDivElement[]>([]);
  const communityBoxRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLParagraphElement>(null);

  // Initialize refs array
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !featureCardsRef.current.includes(el)) {
      featureCardsRef.current.push(el);
    }
  };

  // Separate effect for feature card animations to ensure refs are populated
  useLayoutEffect(() => {
    // Small delay to ensure all refs are populated
    const timer = setTimeout(() => {
      if (featureCardsRef.current.length === 0) {
        return;
      }

      featureCardsRef.current.forEach((card, index) => {
        if (card) {
          // Determine slide direction (alternate between left and right)
          const slideFromLeft = index % 2 === 0;
          const slideDistance = slideFromLeft ? -100 : 100;

          // Ensure initial state is set
          gsap.set(card, {
            x: slideDistance,
            opacity: 0,
          });

          // Create individual ScrollTrigger for each card
          gsap.to(card, {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none none",
            },
          });
        }
      });
    }, 200); // Small delay to ensure refs are populated

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Add CSS animations for gradient text
      if (typeof window !== "undefined") {
        const style = document.createElement("style");
        style.textContent = `
          .gradient-text {
            background-size: 200% 200%;
            animation: gradientShift 6s ease infinite;
          }
          
          @keyframes gradientShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          
          .feature-icon {
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .gradient-underline {
            position: relative;
          }
          
          .gradient-underline::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, #8B5CF6, #EC4899);
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.5s ease;
          }
          
          .gradient-underline:hover::after {
            transform: scaleX(1);
          }
          
          .feature-highlight {
            opacity: 0;
            transform: translateX(-100px);
            will-change: transform, opacity;
          }
          
          .feature-highlight:nth-child(even) {
            transform: translateX(100px);
          }
        `;
        document.head.appendChild(style);
      }
      // Animate section entrance
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            end: "bottom 30%",
            toggleActions: "play none none none",
          },
        }
      );

      // Animate title with typewriter effect for gradient text
      const gradientTexts =
        sectionRef.current?.querySelectorAll(".gradient-text") || [];
      gradientTexts.forEach((text, index) => {
        gsap.fromTo(
          text,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            delay: index * 0.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 75%",
            },
          }
        );
      });

      // Animate introduction text
      gsap.fromTo(
        introRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: "power2.out",
          delay: 0.4,
          scrollTrigger: {
            trigger: introRef.current,
            start: "top 85%",
          },
        }
      );

      // Artimate goal box with same style as community box
      gsap.fromTo(
        goalBoxRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: goalBoxRef.current,
            start: "top 75%",
            end: "bottom 60%",
            toggleActions: "play none none none",
          },
        }
      );

      // Animate community box
      gsap.fromTo(
        communityBoxRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: communityBoxRef.current,
            start: "top 75%",
            end: "bottom 60%",
            toggleActions: "play none none none",
          },
        }
      );

      // Animate CTA text
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-16 md:py-24 relative min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <div className="text-center mb-8 md:mb-16">
          <h2
            ref={titleRef}
            className="text-2xl md:text-4xl font-bold text-gray-900 md:mb-6"
          >
            Why choose{" "}
            <span className="bg-gradient-to-b from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent font-bold gradient-text">
              FindABohra
            </span>
            ?
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6 md:space-y-12">
            {/* Introduction */}
            <div className="space-y-6">
              <p
                ref={introRef}
                className="w-[92%] md:w-full mx-auto text-sm md:text-xl text-center text-gray-700 leading-relaxed"
              >
                <span className="bg-gradient-to-b from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent font-bold gradient-text">
                  FindABohra
                </span>{" "}
                helps you meet smart, safe, and meaningful matches within the
                community.
              </p>

              <div
                ref={goalBoxRef}
                className="bg-gradient-to-r from-purple-50/80 to-pink-50/80 backdrop-blur-sm rounded-2xl w-[85%] md:w-[90%] mx-auto p-4 md:p-8 border border-purple-100 text-gray-900"
              >
                <h3 className="text-md md:text-2xl mb-2 md:mb-4 font-bold">
                  Our goal?
                </h3>{" "}
                <p className="text-sm md:text-base">
                  To make connections so real and compatible that you can{" "}
                  <span className="font-bold">delete </span> the app once
                  you&apos;ve found your match.
                </p>
              </div>
            </div>

            {/* Feature Highlights */}
            <div className="space-y-6 w-[85%] md:w-[96%] mx-auto">
              <div className="grid gap-4">
                {/* Culturally Aligned */}
                <div
                  ref={addToRefs}
                  className="feature-highlight flex items-start space-x-2 md:space-x-4 px-2 py-4 md:p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-lg md:text-2xl feature-icon">🔗</div>
                  <div>
                    <h4 className="text-sm md:text-xl text-gray-900 mb-1">
                      Culturally Aligned
                    </h4>
                    <p className="text-xs md:text-base text-gray-600">
                      We connect people who share traditions, values, and
                      long-term goals.
                    </p>
                  </div>
                </div>

                {/* Safe & Respectful */}
                <div
                  ref={addToRefs}
                  className="feature-highlight flex items-start space-x-2 md:space-x-4 px-2 py-4 md:p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-lg md:text-2xl feature-icon">🛡️</div>
                  <div>
                    <h4 className="text-sm md:text-xl text-gray-900 mb-1">
                      Safe & Respectful
                    </h4>
                    <p className="text-xs md:text-base text-gray-600">
                      Your privacy matters. Every feature is designed with
                      security in mind.
                    </p>
                  </div>
                </div>

                {/* Fun, Yet Intentional */}
                <div
                  ref={addToRefs}
                  className="feature-highlight flex items-start space-x-2 md:space-x-4 px-2 py-4 md:p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-2xl feature-icon">💖</div>
                  <div>
                    <h4 className="text-sm md:text-xl text-gray-900 mb-1">
                      Fun, Yet Intentional
                    </h4>
                    <p className="text-xs md:text-base text-gray-600">
                      A fresh take on modern dating, with personality-driven
                      prompts and features that go beyond just looks.
                    </p>
                  </div>
                </div>

                {/* Smarter Matches */}
                <div
                  ref={addToRefs}
                  className="feature-highlight flex items-start space-x-2 md:space-x-4 px-2 py-4 md:p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-2xl feature-icon">🤝</div>
                  <div>
                    <h4 className="text-sm md:text-xl text-gray-900 mb-1">
                      Smarter Matches
                    </h4>
                    <p className="text-xs md:text-base text-gray-600">
                      Advanced matching algorithms prioritize compatibility, so
                      you connect with people who truly fit your world.
                    </p>
                  </div>
                </div>

                {/* Find love + Delete app */}
                <div
                  ref={addToRefs}
                  className="feature-highlight flex items-start space-x-2 md:space-x-4 px-2 py-4 md:p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-2xl feature-icon">💫</div>
                  <div>
                    <h4 className="text-sm md:text-xl text-gray-900 mb-1">
                      Find love + Delete app
                    </h4>
                    <p className="text-xs md:text-base text-gray-600">
                      Our goal isn&apos;t to keep you swiping forever—it&apos;s
                      to help you find your person and move forward into
                      something real.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Community Section */}
            <div
              ref={communityBoxRef}
              className="bg-gradient-to-r from-purple-50/80 to-pink-50/80 backdrop-blur-sm rounded-2xl w-[86%] md:w-[94%] mx-auto p-4 md:p-8 border border-purple-100"
            >
              <h3 className="text-md md:text-2xl mb-2 md:mb-4 font-bold">
                More Than Just Matches — <br className="md:hidden" /> A
                Community Built for Love
              </h3>
              <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
                Finding your person shouldn&apos;t feel like endless scrolling
                through strangers. FAB is designed for genuine connections,
                where shared values meet natural chemistry and lasting
                relationships begin.
              </p>
            </div>

            {/* Call to Action */}
            <div className="text-center pt-6">
              <p
                ref={ctaRef}
                className="text-lg md:text-2xl text-gray-800 font-medium leading-relaxed"
              >
                Ready to find your person? <br className="md:hidden" />
                <a
                  href="#home"
                  className="bg-gradient-to-b from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent font-bold gradient-underline hover:scale-110 transition-transform duration-200"
                >
                  Download the app today!
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
