import Image from "next/image";
import { InviteForm } from "./InviteForm";

export function Hero() {
  return (
    <section id="home" className="bg-[#FCECFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-15 pb-20 md:py-0 h-full md:h-screen ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div>
              <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4 md:mb-6">
                Modern Matchmaking,
                <br />
                Rooted in Tradition
              </h1>
              <p className="text-sm md:text-lg font-semibold mb-2 text-gray-600 leading-relaxed">
                Your match, your way!
              </p>
              <p className="text-xs md:text-base p-6 md:px-0 text-gray-600 leading-relaxed">
                FindABohra brings the Dawoodi Bohra community together with
                curated matches, complete privacy, and meaningful connections.
                Modern, intentional, and true to you!
              </p>
              <p className="text-xs md:text-lg font-semibold mt-2 text-gray-600 leading-relaxed">
                Request early access - your forever could start here. 💕
              </p>
            </div>

            {/* App Download Buttons - Disabled */}
            <div className="flex gap-2 items-center justify-center lg:justify-start">
              <div className="relative w-40 h-12 sm:w-50 sm:h-15 opacity-50 cursor-not-allowed">
                <Image
                  src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                  alt="Download on the App Store - Coming Soon"
                  fill
                  sizes="(max-width: 640px) 160px, 200px"
                />
              </div>
              <div className="relative w-40 h-17 sm:w-50 sm:h-22 opacity-50 cursor-not-allowed">
                <Image
                  src="/google-play-badge.png"
                  alt="Get it on Google Play - Coming Soon"
                  fill
                  sizes="(max-width: 640px) 160px, 200px"
                />
              </div>
            </div>

            {/* Statistics */}
            {/* <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-500">50K+</div>
                <div className="text-sm text-gray-600">Success Stories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-500">500K+</div>
                <div className="text-sm text-gray-600">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-500">25+</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
            </div> */}
          </div>

          {/* Right Image */}

          {/* <div className="w-full md:w-[50%] relative mt-8 md:mt-0">
            <div className="relative z-10">
              <Image
                src="/hero-heart.png"
                alt="hero-image"
                width={900}
                height={900}
                className="w-90 h-90 md:w-full md:h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:top-[30%] md:left-[45%] md:transform md:-translate-x-[40%] md:-translate-y-[30%] z-[-1]"
              />

              <Image
                src="/hero-img.png"
                alt="hero-image"
                width={620}
                height={620}
                className="relative z-50 w-80 h-80 md:w-full md:h-full md:pl-20 md:pt-20"
              /> */}
          {/* Right Content - Form */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <InviteForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
