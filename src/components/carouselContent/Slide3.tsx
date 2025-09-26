import Image from "next/image";
import { HiMiniXMark, HiHeart } from "react-icons/hi2";
import { PhoneMockup } from "../ui/PhoneMockup";
import PhoneNavbar from "../ui/PhoneNavbar";
import ProfileActions from "../ui/ProfileActions";
import { CarouselItem } from "./typeLib";

type Slide3Props = {
  currentItem: CarouselItem;
};

export default function Slide3({ currentItem }: Slide3Props) {
  const profiles = currentItem.phoneContent?.profiles;
  return (
    <>
      {/* Left - Phone Mockup */}
      <PhoneMockup
        marginLeft="ml-5 md:ml-10"
        rotate="rotate-[-6deg] md:rotate-[-10deg]"
      >
        {/* Phone Content */}
        <div className="flex-1 flex flex-col py-3 md:py-4 pb-10 md:pb-20 relative">
          {/* Profile Images */}
          <div className="relative mb-2 md:mb-4 mx-2 md:mx-3">
            {/* Background Image */}
            <div className="w-[90%] h-24 md:h-38 mx-auto bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg relative overflow-hidden">
              {profiles?.[0]?.bgImage && (
                <Image
                  src={profiles[0].bgImage}
                  alt={profiles[0].name}
                  width={50}
                  height={50}
                  className="w-full h-full rounded-lg object-cover"
                />
              )}
            </div>

            {/* Foreground Image */}
            <div className="absolute top-[-5px] left-[-35px] md:left-[-45px] w-[90%] h-24 md:h-36 rotate-[-3deg] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
              <div className="relative">
                {profiles?.[0]?.image && (
                  <Image
                    src={profiles[0].image}
                    alt={profiles[0].name}
                    width={50}
                    height={50}
                    className="w-full h-full rounded-lg object-cover"
                  />
                )}
                {/* X icon overlay */}
                <div className="absolute top-1/2 left-[40%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <HiMiniXMark className="text-[#67295F] text-4xl md:text-6xl font-bold p-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="w-full mx-auto bg-[#FCE7F3] rounded-2xl p-3 md:p-5 mb-2 md:mb-4">
            <h1 className="text-[9px] md:text-xs text-center font-bold text-gray-800 mb-0 md:mb-1">
              {profiles?.[0]?.name}
            </h1>
            <p className="text-[7px] md:text-[9px] text-center text-gray-600 mb-1.5 md:mb-3">
              {profiles?.[0]?.location}
            </p>

            {/* About Section */}
            <div className="mb-3">
              <h2 className="text-[7px] md:text-[10px] font-bold text-gray-800 mb-1">
                About
              </h2>
              <p className="text-[7px] md:text-[9px] text-gray-600 leading-relaxed">
                {profiles?.[0]?.about}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="absolute bottom-5 md:bottom-19 left-0 right-0 px-2">
            <ProfileActions />
          </div>
        </div>
        {/* Phone Navbar */}
        <div className="absolute bottom-3 left-0 right-0 px-2">
          <PhoneNavbar rounded="rounded-t-xl rounded-b-2xl" />
        </div>
      </PhoneMockup>

      <div className="absolute top-[32%] left-[35%] md:top-[30%] md:left-[25%]">
        {/* Right - Phone Mockup */}
        <PhoneMockup
          marginLeft="ml-8 md:ml-10"
          rotate="rotate-[10deg] md:rotate-[10deg]"
        >
          {/* Phone Content */}
          <div className="flex-1 flex flex-col py-3 md:py-4 pb-10 md:pb-20 relative">
            {/* Profile Images */}
            <div className="relative mb-2 md:mb-4 mx-2 md:mx-3">
              {/* Background Image */}
              <div className="w-[90%] h-28 md:h-38 mx-auto bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg relative overflow-hidden">
                {profiles?.[1]?.bgImage && (
                  <Image
                    src={profiles[1].bgImage}
                    alt={profiles[1].name}
                    width={50}
                    height={50}
                    className="w-full h-full rounded-lg object-cover"
                  />
                )}
              </div>

              {/* Foreground Image */}
              <div className="absolute top-[-5px] right-[-35px] md:right-[-45px] w-[90%] h-28 md:h-36 rotate-[3deg] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
                {/* Man's face placeholder */}
                <div className="relative">
                  {profiles?.[1]?.image && (
                    <Image
                      src={profiles[1].image}
                      alt={profiles[1].name}
                      width={50}
                      height={50}
                      className="w-full h-full rounded-lg object-cover"
                    />
                  )}
                  {/* X icon overlay */}
                  <div className="absolute top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2 bg-[#B23AA8] rounded-full flex items-center justify-center shadow-lg">
                    <HiHeart className="text-white text-4xl md:text-6xl font-bold p-2" />
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Details */}
            <div className="w-full mx-auto bg-[#FCE7F3] rounded-2xl p-3 md:p-5 mb-2 md:mb-4">
              <h1 className="text-[9px] md:text-xs text-center font-bold text-gray-800 mb-0 md:mb-1">
                {profiles?.[1]?.name}
              </h1>
              <p className="text-[7px] md:text-[9px] text-center text-gray-600 mb-1.5 md:mb-3">
                {profiles?.[1]?.location}
              </p>

              {/* About Section */}
              <div className="mb-3">
                <h2 className="text-[7px] md:text-[10px] font-bold text-gray-800 mb-1">
                  About
                </h2>
                <p className="text-[7px] md:text-[9px] text-gray-600 leading-relaxed">
                  {profiles?.[1]?.about}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="absolute bottom-12 md:bottom-22.5 left-0 right-0 px-2">
              <ProfileActions />
            </div>
          </div>

          {/* Phone Navbar */}
          <div className="absolute bottom-3 left-0 right-0 px-2">
            <PhoneNavbar rounded="rounded-t-xl rounded-b-2xl" />
          </div>
        </PhoneMockup>
      </div>
    </>
  );
}
