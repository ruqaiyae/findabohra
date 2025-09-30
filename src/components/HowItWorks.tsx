import Image from "next/image";
import {
  HiMagnifyingGlass,
  CgProfile,
  MdChatBubbleOutline,
  FaRegHeart,
} from "./icons";

export function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Create Your Profile",
      description:
        "Build a comprehensive profile with your photos, interests, and what you're looking for in a partner",
      icon: CgProfile,
      color: ["#A855F7", "#8B5CF6"],
    },
    {
      id: 2,
      title: "Browse & Connect",
      description:
        "Discover compatible matches based on your preferences and send connection requests",
      icon: HiMagnifyingGlass,
      color: ["#EC4899", "#F472B6"],
    },
    {
      id: 3,
      title: "Start Conversations",
      description:
        "Once matched, begin meaningful conversations in our secure messaging environment",
      icon: MdChatBubbleOutline,
      color: ["#A855F7", "#8B5CF6"],
    },
    {
      id: 4,
      title: "Meet Your Match",
      description:
        "Take the next step and meet in person with the guidance of family members if desired",
      icon: FaRegHeart,
      color: ["#EC4899", "#F472B6"],
    },
  ];

  return (
    <section
      id="how-it-works"
      className="bg-white pt-25 pb-15 md:pb-40 relative overflow-hidden"
    >
      {/* Decorative background hearts */}
      <div className="absolute top-10 md:top-30 left-40 -rotate-20">
        <Image
          src="/hero-heart.png"
          alt="Decorative heart"
          width={346}
          height={346}
          className="object-contain w-auto h-auto"
        />
      </div>
      <div className="absolute bottom-10 md:-bottom-22.5 left-0 md:left-auto md:right-80 w-25 h-25 md:w-64 md:h-64 opacity-70">
        <Image
          src="/hearts.png"
          alt="Decorative hearts"
          width={180}
          height={180}
          className="object-contain scale-x-[-1] w-auto h-auto"
        />
      </div>

      <div className="max-w-7xl space-y-10 md:space-y-0 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center md:mb-25 w-[70%] md:w-full mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto">
            Simple steps to find your perfect life partner
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-20">
            {steps.map((step) => (
              <div key={step.id} className="relative z-10">
                <div className="text-center w-[65%] md:w-full mx-auto">
                  {/* Step Icon */}
                  <div
                    className="w-10 h-10 md:w-20 md:h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${step.color[0]} 0%, ${step.color[1]} 100%)`,
                    }}
                  >
                    <step.icon size={20} color="white" className="md:hidden" />
                    <step.icon
                      size={40}
                      color="white"
                      className="hidden md:block"
                    />
                  </div>
                  {/* Step Title */}
                  <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-gray-600 leading-relaxed text-xs md:text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* dotted line */}
        <DottedLine position="left-57" />
        <DottedLine position="right-137" />
        <DottedLine position="right-57" />
      </div>
    </section>
  );
}

type DottedLineProps = {
  position: string;
};

function DottedLine({ position }: DottedLineProps) {
  return (
    <Image
      src="/dotted-arrow.png"
      alt="Dotted line"
      width={180}
      height={100}
      className={`hidden lg:block absolute top-45 w-auto h-auto ${position}`}
    />
  );
}
