import { FaSignal, FaWifi, FaBatteryFull } from "../icons";

type PhoneMockupProps = {
  children: React.ReactNode;
  marginLeft: string;
  rotate: string;
};

export function PhoneMockup({
  children,
  marginLeft,
  rotate,
}: PhoneMockupProps) {
  return (
    <div
      className={`relative h-[300px] w-[160px] sm:h-[400px] sm:w-[190px] md:h-[440px] md:w-[220px] lg:h-[440px] lg:w-[220px] ${marginLeft} bg-black rounded-4xl p-2 shadow-2xl ${rotate}`}
    >
      {/* phone buttons */}
      <div className="absolute top-16 sm:top-20 md:top-22 left-[-2px] h-3 w-1 sm:h-4 sm:w-1 md:h-4 md:w-1 rounded-full bg-black/90 shadow-lg" />
      <div className="absolute top-22 sm:top-26 md:top-28 left-[-2px] h-5 w-1 sm:h-5 sm:w-1 md:h-6 md:w-1 rounded-full bg-black/90 shadow-lg" />
      <div className="absolute top-28 sm:top-32 md:top-36 left-[-2px] h-5 w-1 sm:h-5 sm:w-1 md:h-6 md:w-1 rounded-full bg-black/90 shadow-lg" />
      <div className="absolute top-22 sm:top-26 md:top-28 right-[-2px] h-8 w-1 sm:h-10 sm:w-1 md:h-11 md:w-1 rounded-full bg-black/90 shadow-lg" />
      {/* phone screen */}
      <div className="w-full h-full bg-gradient-to-br from-pink-100 via-white to-pink-100 rounded-3xl overflow-hidden">
        {/* Phone Header */}
        <div className="px-2 sm:px-3 md:px-3 pt-2 sm:pt-2 md:pt-3 flex justify-between relative z-10">
          <p className="text-[7px] sm:text-[8px] md:text-[9px] text-gray-500">
            10:00
          </p>
          <div className="flex items-center justify-end w-12 h-3 ml-4 sm:w-14 sm:h-4 md:w-16 md:h-4 pr-1 sm:pr-1 md:pr-1.5 rounded-full bg-black/90 shadow-lg">
            <div className="relative w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-1.5 md:h-1.5 rounded-full bg-gradient-to-br from-gray-800 to-black ring-gray-600 shadow-inner">
              <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-gray-700 to-gray-900">
                <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-gray-600 to-gray-800">
                  {/* Main lens glass */}
                  <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-end flex gap-1">
            <FaSignal className="text-gray-500 text-[7px] sm:text-[8px] md:text-[9px]" />
            <FaWifi className="text-gray-500 text-[7px] sm:text-[8px] md:text-[9px]" />
            <FaBatteryFull className="text-gray-500 text-[7px] sm:text-[8px] md:text-[9px]" />
          </div>
        </div>

        {children}

        <div className="flex justify-center mt-1 sm:mt-1.5 w-full">
          <div className="w-12 sm:w-16 md:w-20 h-[1.5px] sm:h-[2px] md:h-[2.5px] bg-black/90 rounded-full" />
        </div>
      </div>
    </div>
  );
}
