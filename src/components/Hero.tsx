import Image from "next/image";

export function Hero() {
  return (
    // <section id="home" className="bg-gradient-to-r from-pink-100 to-pink-100">
    <section id="home" className="bg-[#FCECFC] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          {/* Left Content */}
          <div className="w-[50%] space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Find Your{" "}
                <span className="bg-gradient-to-b from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
                  Rishta
                </span>
                ,
                <br />
                <span className="text-gray-900">The Bohra Way.</span>
              </h1>
              <p className="text-l text-gray-600 leading-relaxed">
                Join thousands of Bohras who have found meaningful <br />
                connections through our trusted platform. <br />
                Start your journey to find your ideal match today.
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
          <div className="w-[50%] relative">
            <div className="relative z-10 w-180 h-152">
              {/* <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center relative overflow-hidden"> */}
              {/* Soft pink circular background element */}
              {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200 rounded-full opacity-30"></div> */}

              {/* <div className="text-center text-gray-500 relative z-10">
                  <svg
                    className="w-24 h-24 mx-auto mb-4 text-purple-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-lg">Bohra Couple Image</p>
                  <p className="text-sm">Placeholder for hero image</p>
                </div> */}

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
      {/* </div> */}
      {/* </div> */}
    </section>
  );
}
