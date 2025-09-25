import Image from "next/image";
import { CarouselItem } from "./typeLib";
import { PhoneMockup } from "../ui/PhoneMockup";
import PhoneNavbar from "../ui/PhoneNavbar";

type Slide2Props = {
  currentItem: CarouselItem;
};

export default function Slide2({ currentItem }: Slide2Props) {
  return (
    <div>
      {/* Phone mockup with likes screen content */}
      <PhoneMockup marginLeft="mx-auto" rotate="rotate-0">
        {/* Likes Screen Content */}
        <div className="flex-1 flex flex-col px-3 py-2">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-xs font-bold text-gray-800 mb-2">
              {currentItem.phoneContent?.title}
            </h1>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-around w-full mx-auto bg-white rounded-full py-1 text-[7px] font-medium text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300 shadow-[0_0_15px_rgba(103,41,95,0.5)]">
                <p className="px-3 py-1 bg-[#67295F] text-white rounded-full text-[8px] font-bold">
                  Liked Me
                </p>
                <p className="px-1 py-[2px] text-gray-500 text-[10px] font-bold">
                  I Liked
                </p>
                <p className="px-1 py-[2px] text-gray-500 text-[10px] font-bold">
                  Passed
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mb-2">
              <div className="flex items-center justify-center gap-2 mb-1">
                <p className="text-[12px] font-semibold text-gray-700">
                  Liked Me
                </p>
                <div className="w-4 h-4 bg-[#67295F] rounded-full flex items-center justify-center">
                  <span className="text-white text-[10px] font-medium">6</span>
                </div>
              </div>
              <p className="text-[10px] text-gray-600">
                {currentItem.phoneContent?.content}
              </p>
            </div>
          </div>

          {/* Profile Grid */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            {/* Profiles */}
            {currentItem.phoneContent?.profiles?.map((profile) => (
              <div
                key={profile.name}
                className="bg-white rounded-lg p-2 shadow-sm text-center"
              >
                <Image
                  src={profile.image || "/profile-circle.png"}
                  alt={profile.name}
                  width={50}
                  height={50}
                  className="w-full h-20 rounded-lg mb-2 object-cover"
                />
                <p className="text-[8px] font-semibold text-gray-800">
                  {profile.name}
                </p>
                <p className="text-[7px] text-gray-600">{profile.location}</p>
                <p className="text-[7px] text-[#67295F]">{profile.time}</p>
              </div>
            ))}
          </div>

          {/* Custom Bottom Navigation for Likes Screen */}
          <div className="absolute bottom-3 left-0 right-0 z-10 px-2">
            <PhoneNavbar rounded="rounded-t-xl rounded-b-2xl" />
          </div>
        </div>
      </PhoneMockup>
    </div>
  );
}
