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
    <section className="bg-white pt-25 md:pb-40 relative overflow-hidden">
      {/* Decorative background hearts */}
      <div className="absolute top-30 left-40 -rotate-20">
        <Image
          src="/hero-heart.png"
          alt="Decorative heart"
          width={346}
          height={346}
          className="object-contain"
        />
      </div>
      <div className="absolute -bottom-22.5 right-80 w-64 h-64 opacity-70">
        <Image
          src="/hearts.png"
          alt="Decorative hearts"
          width={180}
          height={180}
          className="object-contain scale-x-[-1]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-25">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple steps to find your perfect life partner
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-20">
            {steps.map((step) => (
              <div key={step.id} className="relative z-10">
                <div className="text-center">
                  {/* Step Icon */}
                  <div
                    className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${step.color[0]} 0%, ${step.color[1]} 100%)`,
                    }}
                  >
                    <step.icon size={40} color="white" />
                  </div>
                  {/* Step Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-gray-600 leading-relaxed text-sm">
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
      className={`hidden lg:block absolute top-45 ${position}`}
    />
  );
}
