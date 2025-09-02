import {
  CiLineHeight,
  LuGraduationCap,
  FaPray,
  MdOutlineWork,
  GiBigDiamondRing,
  FaRegClock,
} from "../icons";
import { CarouselItem } from "./typeLib";
import { PhoneMockup } from "../ui/PhoneMockup";
import PhoneNavbar from "../ui/PhoneNavbar";
import ProfileActions from "../ui/ProfileActions";

type Slide4Props = {
  currentItem: CarouselItem;
};

export default function Slide4({ currentItem }: Slide4Props) {
  const profile = currentItem.phoneContent?.profiles?.[0];
  if (!profile) return null;

  const { name, location, about } = profile;

  return (
    <PhoneMockup marginLeft="mx-auto" rotate="rotate-0">
      {/* Boost Profile Screen Content */}
      <div className="flex-1 flex flex-col px-3 py-2 pb-20 relative">
        {/* Profile Picture */}
        <div className="w-[90%] h-38 bg-gray-300 rounded-lg mb-3 absolute -top-12 left-1/2 -translate-x-1/2">
          {/* Profile image placeholder */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 rounded-lg" />
        </div>

        {/* Profile Information */}
        <div className="mt-28">
          <h1 className="text-sm text-center font-bold text-gray-800">
            {name}
          </h1>
          <p className="text-[9px] text-center font-semibold text-gray-600 mb-3">
            {location}
          </p>

          {/* About Section */}
          <div className="mb-2.5">
            <h2 className="text-[11px] font-bold text-gray-800">About</h2>
            <p className="text-[9px] text-gray-600 leading-relaxed">{about}</p>
          </div>

          {/* Detailed Attributes */}
          <div className="grid grid-cols-2 gap-3 mb-3">
            {/* Left Column */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <CiLineHeight className="text-xs font-extrabold text-[#67295F]" />
                <span className="text-[9px] text-gray-700">
                  6&apos;9&quot;
                </span>
              </div>

              <div className="flex items-center gap-2">
                <LuGraduationCap className="text-xs font-extrabold text-[#67295F]" />
                <span className="text-[9px] text-gray-700">High school</span>
              </div>

              <div className="flex items-center gap-2">
                <FaPray className="text-xs font-extrabold text-[#67295F]" />
                <span className="text-[9px] text-gray-700">
                  Moderately practicing
                </span>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MdOutlineWork className="text-xs font-extrabold text-[#67295F]" />
                <span className="text-[9px] text-gray-700">Lawyer</span>
              </div>

              <div className="flex items-center gap-2">
                <GiBigDiamondRing className="text-xs font-extrabold text-[#67295F]" />
                <span className="text-[9px] text-gray-700">Never Married</span>
              </div>

              <div className="flex items-center gap-2">
                <FaRegClock className="text-xs font-extrabold text-[#67295F]" />
                <span className="text-[9px] text-gray-700">2-4 years</span>
              </div>
            </div>
          </div>

          <h2 className="text-[11px] font-bold text-gray-800">Interests</h2>
          <ul className="flex gap-2 text-[9px] text-gray-600">
            <li>Traveling,</li>
            <li>Cooking,</li>
            <li>Photography,</li>
          </ul>
        </div>
        {/* Action Buttons */}
        <div className="absolute bottom-7 left-0 right-0 px-2">
          <ProfileActions />
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-7 left-0 right-0 px-2">
          <PhoneNavbar rounded="rounded-t-xl rounded-b-2xl" />
        </div>
      </div>
    </PhoneMockup>
  );
}
