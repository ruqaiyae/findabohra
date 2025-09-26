import { Hearts } from "./ui/Hearts";

export function About() {
  return (
    <section id="about" className="bg-white py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 md:mb-6">
            Why choose{" "}
            <span className="bg-gradient-to-b from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent font-bold">
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
              <p className="w-[92%] md:w-full mx-auto text-sm md:text-xl text-center text-gray-700 leading-relaxed">
                <span className="bg-gradient-to-b from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent font-bold">
                  FindABohra
                </span>{" "}
                helps you meet smart, safe, and meaningful matches within the
                community.
              </p>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl w-[85%] md:w-[90%] mx-auto p-4 md:p-8 border border-purple-100 text-gray-900">
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
            <div className="space-y-6 w-[85%] md:w-[92%] mx-auto">
              <div className="grid gap-4">
                {/* Culturally Aligned */}
                <div className="flex items-start space-x-2 md:space-x-4 px-2 py-4 md:p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-lg md:text-2xl">🔗</div>
                  <div>
                    <h4 className="text-sm md:text-base font-bold text-gray-900 mb-1">
                      Culturally Aligned
                    </h4>
                    <p className="text-xs md:text-base text-gray-600">
                      We connect people who share traditions, values, and
                      long-term goals.
                    </p>
                  </div>
                </div>

                {/* Safe & Respectful */}
                <div className="flex items-start space-x-2 md:space-x-4 px-2 py-4 md:p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-lg md:text-2xl">🛡️</div>
                  <div>
                    <h4 className="text-sm md:text-base font-bold text-gray-900 mb-1">
                      Safe & Respectful
                    </h4>
                    <p className="text-xs md:text-base text-gray-600">
                      Your privacy matters. Every feature is designed with
                      security in mind.
                    </p>
                  </div>
                </div>

                {/* Fun, Yet Intentional */}
                <div className="flex items-start space-x-2 md:space-x-4 px-2 py-4 md:p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-2xl">💖</div>
                  <div>
                    <h4 className="text-sm md:text-base font-bold text-gray-900 mb-1">
                      Fun, Yet Intentional
                    </h4>
                    <p className="text-xs md:text-base text-gray-600">
                      A fresh take on modern dating, with personality-driven
                      prompts and features that go beyond just looks.
                    </p>
                  </div>
                </div>

                {/* Smarter Matches */}
                <div className="flex items-start space-x-2 md:space-x-4 px-2 py-4 md:p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-2xl">🤝</div>
                  <div>
                    <h4 className="text-sm md:text-base font-bold text-gray-900 mb-1">
                      Smarter Matches
                    </h4>
                    <p className="text-xs md:text-base text-gray-600">
                      Advanced matching algorithms prioritize compatibility, so
                      you connect with people who truly fit your world.
                    </p>
                  </div>
                </div>

                {/* Find love + Delete app */}
                <div className="flex items-start space-x-2 md:space-x-4 px-2 py-4 md:p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-2xl">💫</div>
                  <div>
                    <h4 className="text-sm md:text-base font-bold text-gray-900 mb-1">
                      Find love + Delete app
                    </h4>
                    <p className="text-xs md:text-base text-gray-600">
                      We Want You to Find Love & Delete the App. Our goal
                      isn&apos;t to keep you swiping forever—it&apos;s to help
                      you find your person and move forward into something real.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Community Section */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl w-[86%] md:w-[90%] mx-auto p-4 md:p-8 border border-purple-100">
              <h3 className="text-md md:text-2xl mb-2 md:mb-4 font-bold">
                More Than Just Matches — <br className="md:hidden" /> A
                Community Built for Love
              </h3>
              <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
                Finding your person shouldn&apos;t feel like scrolling endlessly
                through strangers. Our app is built for real connections, where
                values meet vibes and meaningful relationships begin.
              </p>
            </div>

            {/* Call to Action */}
            <div className="text-center pt-6">
              <p className="text-lg md:text-2xl text-gray-800 font-medium leading-relaxed">
                Ready to find your person? <br className="md:hidden" />
                <a
                  href="#home"
                  className="bg-gradient-to-b from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent font-bold gradient-underline"
                >
                  Download the app today!
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative hearts */}
      <div className="absolute bottom-0 md:top-50 left-0">
        <Hearts scale="scale-x-[-1]" />
      </div>

      <div className="absolute top-5 md:top-auto md:bottom-0 right-0">
        <Hearts />
      </div>
    </section>
  );
}
