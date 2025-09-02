import { Hearts } from "./ui/Hearts";

export function About() {
  return (
    <section id="about" className="bg-white py-10 md:py-20 relative">
      {/* Mobile: Text below image, Desktop: Absolute positioned */}
      <div className="block md:absolute md:top-[15%] md:left-[42%] z-50 bg-[#fff] md:h-auto h-auto md:rounded-lg order-2 md:order-none">
        <h2 className="text-xl md:text-4xl px-4 md:px-25 pb-8 md:py-2 font-bold text-gray-900 text-center md:text-left">
          Why choose Find A Bohra?
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative order-1">
            <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl flex items-center justify-center">
              <div className="text-center text-gray-500">
                <p className="text-lg">Placeholder</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 order-3 lg:order-2 w-[90%] md:mt-10 mx-auto">
            <div className="space-y-4 text-sm md:text-lg text-gray-600 leading-relaxed">
              <p>
                At FindABohra, we&apos;ve created a trusted, community-centered
                space designed especially for Dawoodi Bohras seeking meaningful
                and halal connections. Our warm and respectful user base,
                thoughtfully designed features, and dedicated support make your
                rishta journey smooth, secure, and dignified.
              </p>
              <p>
                We are deeply committed to maintaining a safe and values-aligned
                experience. Every profile is manually reviewed, and our platform
                is regularly monitored to ensure a halal environment that
                reflects the ethics of our faith and the traditions of our
                community.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Decorative hearts */}
      <div className="absolute bottom-0 right-0">
        <Hearts />
      </div>
    </section>
  );
}
