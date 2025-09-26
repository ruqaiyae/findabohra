import { PhoneMockup } from "../ui/PhoneMockup";
import { FaBell, GoArrowLeft } from "../icons";
import { CarouselItem } from "./typeLib";

type Slide6Props = {
  currentItem: CarouselItem;
};

export default function Slide5({ currentItem }: Slide6Props) {
  return (
    <PhoneMockup marginLeft="mx-auto" rotate="rotate-0">
      {/* Header */}
      <div className="px-2 py-1 md:px-3 md:py-2 flex items-center">
        <button className="w-4 h-4 md:w-6 md:h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
          <GoArrowLeft className="text-black text-[8px]" />
        </button>
        <h1 className="flex-1 text-center text-[8px] md:text-[10px] mr-4 md:mr-6 font-semibold text-[#67295F]">
          {currentItem.phoneContent?.title}
        </h1>
      </div>

      {/* Notifications List */}
      <div className="flex-1 px-2 py-1 md:px-3 md:py-2 space-y-1 md:space-y-2 overflow-y-auto">
        {currentItem.phoneContent?.notifications?.map((notification) => (
          <div
            key={notification.id}
            className="bg-white rounded-lg p-1.5 md:p-2 shadow-sm border border-purple-100"
          >
            <div className="flex items-start gap-1 md:gap-2">
              <div className="flex items-start justify-center">
                <FaBell className="text-[#67295F] text-[6px]" />
                <p className="text-[4.5px] md:text-[7px] ml-1.5 text-gray-800 leading-tight">
                  {notification.message}
                </p>
              </div>
            </div>
            <p className="flex justify-end text-[4px] md:text-[6px] text-gray-500 mt-1">
              {notification.date}
            </p>
          </div>
        ))}
      </div>
    </PhoneMockup>
  );
}
