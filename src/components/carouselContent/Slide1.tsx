import { BsThreeDotsVertical } from "react-icons/bs";
import { GoArrowLeft } from "react-icons/go";
import { GrAttachment } from "react-icons/gr";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { LiaCheckDoubleSolid } from "react-icons/lia";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import MessageItem from "./MessageItem";
import { PhoneMockup } from "../ui/PhoneMockup";
import PhoneNavbar from "../ui/PhoneNavbar";
import { CarouselItem, MessageItem as MessageItemType } from "./typeLib";

type Slide1Props = {
  currentItem: CarouselItem;
};

export default function Slide1({ currentItem }: Slide1Props) {
  const chat = currentItem.chatContent?.messages;

  return (
    <>
      {/* Left - Phone Mockup */}
      <PhoneMockup
        marginLeft="ml-5 md:ml-10"
        rotate="rotate-[-6deg] md:rotate-[-10deg]"
      >
        {/* Phone Content */}
        <div className="relative px-2 sm:px-3 md:px-4 p-1 sm:p-1.5 md:pt-4 md:pb-2">
          <input
            type="text"
            placeholder="Search by name"
            className="w-full px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-1.5 bg-white rounded-full text-[6px] md:text-[10px] text-gray-700 placeholder-gray-500 shadow-lg border border-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-purple-300 transition-all duration-200"
          />
          <HiMagnifyingGlass className="absolute right-4 sm:right-6 md:right-7 top-4 md:top-5.5 text-gray-400 text-[8px] sm:text-[10px] md:text-base" />
          <div className="absolute right-[19px] sm:right-[28px] md:right-[34px] top-[18px] md:top-[25px] w-[3px] h-[2px] sm:w-[6px] sm:h-[9px] md:w-[7px] md:h-[10px] rounded-sm md:rounded-full border-[1px] border-transparent border-t-gray-400 rotate-20" />
        </div>

        {/* Messages */}
        <div className="mx-2 sm:mx-3 md:mx-4 my-1 sm:my-2">
          <p className="text-[7px] md:text-[10px] sm:text-[11px] md:text-[12px] font-semibold">
            {currentItem.phoneContent?.title}
          </p>

          {currentItem.phoneContent?.messageContent?.map(
            (message: MessageItemType) => (
              <MessageItem
                key={message.time}
                image={message.image}
                name={message.name}
                time={message.time}
                message={message.message}
                notification={message.notification}
              />
            )
          )}
        </div>

        {/* Phone Navbar */}
        <PhoneNavbar rounded="rounded-t-xl mt-29 md:mt-32" />
      </PhoneMockup>

      <div className="absolute top-[33%] left-[38%] md:top-[30%] md:left-[25%]">
        {/* Right - Phone Mockup */}
        <PhoneMockup
          marginLeft="ml-8 md:ml-10"
          rotate="rotate-[10deg] md:rotate-[10deg]"
        >
          {/* Chat Header */}
          <div className="flex items-center justify-between px-2 py-1 md:px-3 md:py-2 border-b border-gray-200 rounded-t-xl">
            <div className="flex items-center gap-1 md:gap-2">
              <div>
                <button className="w-3 h-3 md:w-6 md:h-6 rounded-sm md:rounded-lg border border-gray-200 flex items-center justify-center">
                  <GoArrowLeft className="text-black-500 text-[8px]" />
                </button>
              </div>
              <div className="w-3 h-3 md:w-6 md:h-6 bg-purple-200 rounded-full flex items-center justify-center">
                <span className="text-[4px] md:text-[8px] font-semibold text-purple-700">
                  F
                </span>
              </div>
              <div>
                <p className="text-[6px] md:text-[8px] font-semibold text-gray-900">
                  {currentItem.chatContent?.name}
                </p>
                <div className="flex items-center gap-1">
                  <div className="w-0.5 h-0.5 md:w-1.5 md:h-1.5 bg-green-500 rounded-full"></div>
                  <span className="text-[4px] md:text-[6px] text-green-600">
                    Online
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <button className="text-gray-500 text-[6px] md:text-[8px]">
                <BsThreeDotsVertical />
              </button>
              {/* Dropdown Menu */}
              <div className="absolute right-0 top-full bg-white rounded-md shadow-lg z-10 md:min-w-[70px] py-1">
                <p className="w-full text-left px-2 md:px-3 text-[4px] md:text-[7px] text-gray-700 leading-none py-1">
                  Block
                </p>
                <p className="w-full text-left px-2 md:px-3 text-[4px] md:text-[7px] text-gray-700 leading-none py-1">
                  Report
                </p>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 px-3 py-1 md:py-2 space-y-1 md:space-y-2 overflow-y-auto">
            {/* Date Separator */}
            <div className="flex items-center justify-center">
              <div className="w-25 h-px bg-gray-200" />
              <p className="px-2 text-[4px] md:text-[6px] text-gray-400">
                Today
              </p>
              <div className="w-25 h-px bg-gray-200" />
            </div>

            {/* Incoming Message */}
            <div className="flex justify-start">
              <div className="max-w-[80%]">
                <div className="bg-purple-100 rounded-sm rounded-bl-none md:rounded-xl md:rounded-bl-none px-2 py-1.5">
                  <p className="text-[4px] md:text-[7px] text-gray-800 leading-tight">
                    {chat?.[0]}
                  </p>
                </div>
                <p className="text-[3px] md:text-[5px] text-gray-400 mt-1 md:ml-2">
                  2:55 PM
                </p>
              </div>
            </div>

            {/* Outgoing Message */}
            <div className="flex justify-end">
              <div className="max-w-[80%]">
                <div className="bg-gray-100 rounded-br-none rounded-sm md:rounded-br-none md:rounded-xl px-2 py-1.5">
                  <p className="text-[4px] md:text-[7px] text-gray-800 leading-tight">
                    {chat?.[1]}
                  </p>
                </div>
                <div className="flex justify-end items-top md:items-center gap-1 mt-1 mr-0.5 md:mr-2">
                  <p className="text-[3px] md:text-[5px] text-gray-400">3:02 PM</p>
                  <LiaCheckDoubleSolid className="text-[4px] md:text-[5px] text-green-500" />
                </div>
              </div>
            </div>

            {/* Incoming Media Message */}
            <div className="flex justify-start">
              <div className="max-w-[80%]">
                <div className="bg-purple-100 rounded-bl-none rounded-sm md:rounded-bl-none md:rounded-xl p-1 md:p-1.5">
                  <div className="w-14 h-10 md:w-18 md:h-14 bg-gray-300 rounded-sm md:rounded-md flex items-center justify-center">
                    <span className="text-[4px] md:text-[6px] text-gray-500">
                      {chat?.[2]}
                    </span>
                  </div>
                </div>
                <p className="text-[3px] md:text-[5px] text-gray-400 mt-1 ml-0.5 md:ml-2">3:10 PM</p>
              </div>
            </div>

            {/* Outgoing Message */}
            <div className="flex justify-end">
              <div className="max-w-[80%]">
                <div className="bg-gray-100 rounded-br-none rounded-sm md:rounded-bl-none md:rounded-xl px-2 py-1.5">
                  <p className="text-[4px] md:text-[7px] text-gray-800 leading-tight">
                    {chat?.[3]}
                  </p>
                </div>
                <div className="flex justify-end items-center gap-1 mt-1 mr-0.5 md:mr-2">
                  <p className="text-[3px] md:text-[5px] text-gray-400">3:12 PM</p>
                  <div className="flex gap-0.5">
                    <LiaCheckDoubleSolid className="text-[4px] md:text-[5px] text-gray-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Input */}
          <div className="flex justify-between items-end mt-3 md:mt-6 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-white shadow-[0_0_20px_rgba(103,41,95,0.2)] text-[6px] sm:text-[7px] md:text-[8px]">
            <div className="flex items-center w-full gap-1 md:gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Write here..."
                  className="w-full bg-white rounded-full pl-3 md:pl-6 py-1 md:py-2 text-[5px] md:text-[7px] text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300 shadow-[0_0_15px_rgba(103,41,95,0.15)]"
                />
                <GrAttachment className="absolute left-1 md:left-3 top-1/2 transform -translate-y-1/2 text-[#67295F] text-[5px] md:text-[7px]" />
              </div>
              <button className="bg-white rounded-full p-1 md:p-2 shadow-[0_0_15px_rgba(103,41,95,0.15)] hover:shadow-[0_0_20px_rgba(103,41,95,0.25)] transition-shadow">
                <PiPaperPlaneRightFill className="text-[#67295F] text-[5px] md:text-[7px]" />
              </button>
            </div>
          </div>
        </PhoneMockup>
      </div>
    </>
  );
}
