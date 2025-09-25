import Image from "next/image";

export function CallToAction() {
  return (
    <section className="relative w-full py-20">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-[80%] h-full bg-gradient-to-br from-[#581C87] to-[#BE185D]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-30 items-center">
        {/* Left Content */}
        <div className="text-white space-y-10">
          <h2 className="text-3xl font-bold">
            Let&apos;s Find Your Best Match
          </h2>
          <p className="text-medium font-semibold text-purple-100 leading-relaxed">
            Start your search with a platform that understands your values,
            respects your privacy, and connects you within the trusted Dawoodi
            Bohra community.
          </p>
          <a
            href="#home"
            className="inline-flex items-center text-lg font-semibold text-white hover:text-purple-200 transition-colors border-b-2 border-white hover:border-purple-200 pb-1"
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
            className="w-full h-full rounded-2xl object-cover"
          />
          {/* <div className="w-full h-86 lg:h-[500px] bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl flex items-center justify-center"> */}

          {/* </div> */}
        </div>
      </div>
    </section>
  );
}
