import Image from "next/image";

export function CallToAction() {
  return (
    <section className="relative w-full pt-20 md:pb-20">
      {/* Background Pattern */}
      <div className="hidden md:block absolute top-0 left-0 w-[80%] h-full rounded-tr-xl bg-gradient-to-br from-[#581C87] to-[#BE185D]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-0 relative z-10 grid lg:grid-cols-2 gap-10 md:gap-30 items-center bg-gradient-to-br from-[#581C87] to-[#BE185D] md:bg-none">
        {/* Left Content */}
        <div className="text-white space-y-6 md:space-y-10 w-[82%] md:w-full mx-auto">
          <h2 className="text-xl md:text-4xl text-center md:text-left font-bold">
            Let&apos;s Find Your Best Match
          </h2>
          <p className="text-sm md:text-lg text-center md:text-left font-semibold text-purple-100 leading-relaxed">
            Start your search with a platform that understands your values,
            respects your privacy, and connects you within the trusted Dawoodi
            Bohra community.
          </p>
          <a
            href="#home"
            className="inline-flex items-center text-sm md:text-xl font-semibold text-white hover:text-purple-200 transition-colors border-b-2 border-white hover:border-purple-200 pb-1"
          >
            Download the FindABohra App Today!
          </a>
        </div>

        {/* Right Image */}
        <div className="relative order-1">
          <Image
            src="/call-to-action.png"
            alt="call-to-action"
            width={500}
            height={500}
            className="w-80 h-80 md:w-full md:h-full mx-auto rounded-2xl object-cover"
          />
          {/* <div className="w-full h-86 lg:h-[500px] bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl flex items-center justify-center"> */}

          {/* </div> */}
        </div>
      </div>
    </section>
  );
}
