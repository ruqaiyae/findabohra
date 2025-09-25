import Image from "next/image";

export function Hero() {
  return (
    // <section id="home" className="bg-gradient-to-r from-pink-100 to-pink-100">
    <section id="home" className="bg-[#FCECFC] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          {/* Left Content */}
          <div className="w-[40%] space-y-8">
            <div>
              <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
                Modern Matchmaking,
                <br />
                Rooted in Tradition
              </h1>
              <p className="text-lg font-semibold mb-2 text-gray-600 leading-relaxed">
                Your match, your way!
              </p>
              <p className=" text-gray-600 leading-relaxed">
                FindABohra brings the Dawoodi Bohra community together with
                curated matches, complete privacy, and meaningful connections.
                Modern, intentional, and true to you!
              </p>
              <p className="text-lg font-semibold mt-2 text-gray-600 leading-relaxed">
                Sign up today - your forever could start here. 💕
              </p>
            </div>

            {/* App Download Buttons */}
            <div className="flex flex-col items-center sm:flex-row gap-4">
              <div className="relative w-50 h-15">
                <Image
                  src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                  alt="Download on the App Store"
                  fill
                />
              </div>
              <div className="relative w-50 h-22">
                <Image
                  src="/google-play-badge.png"
                  alt="Get it on Google Play"
                  fill
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
          <div className="hidden md:block lg:block w-[50%] relative">
            <div className="relative z-10 w-180 h-152">
              <Image
                src="/hero-heart.png"
                alt="hero-image"
                width={900}
                height={900}
                className="absolute left-[40%] transform -translate-x-[40%] -translate-y-[30%]z-[-1]"
              />

              <Image
                src="/hero-img.png"
                alt="hero-image"
                width={620}
                height={620}
                className="pl-20 pt-20 relative z-50"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
