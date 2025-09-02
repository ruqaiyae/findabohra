import { BiCool } from "react-icons/bi";
import { BsEnvelope } from "react-icons/bs";
import { CiGlobe } from "react-icons/ci";
import {
  FaCheck,
  FaUser,
  FaShieldAlt,
  FaExclamationTriangle,
} from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import Image from "next/image";
import { PhoneMockup } from "../ui/PhoneMockup";
import { CarouselItem, Tip } from "./typeLib";

type Slide5Props = {
  currentItem: CarouselItem;
};

export default function Slide5({ currentItem }: Slide5Props) {
  const phoneContent = currentItem.phoneContent;
  if (!phoneContent) return null;

  const { subtitle, tips } = phoneContent;

  return (
    <PhoneMockup marginLeft="mx-auto" rotate="rotate-0">
      {/* Message Priority Screen Content */}
      <div className="flex-1 flex flex-col px-3 py-2">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-xs font-bold text-gray-800 mb-2">
            {currentItem.phoneContent?.title}
          </h1>
        </div>

        {/* Illustration */}
        <div className="relative">
          <div className="relative flex-1 flex items-center justify-center border-1 border-[#d7daf3] rounded-full w-[80%] mx-auto mt-25">
            <IoIosPhonePortrait className="absolute bottom-5.5 -left-6 rotate-5 w-24 h-20 text-[#d7daf3]" />
            <IoIosPhonePortrait className="absolute -bottom-1 -right-6 w-24 h-20 text-[#d7daf3]" />
          </div>

          {/* Left phone */}
          <div>
            <Message type="incoming" position="top-4.5 left-7.75" rotate />
            <Message type="outgoing" position="top-7 left-10.25" rotate />
            <Message type="incoming" position="top-9.5 left-7.25" rotate />
            <Message type="outgoing" position="top-12 left-10" rotate />
          </div>

          {/* Right phone */}
          <div>
            <Message type="incoming" position="top-10.5 left-31" />
            <Message type="outgoing" position="top-13 left-33.5" />
            <Message type="incoming" position="top-15.5 left-31" />
            <Message type="outgoing" position="top-18 left-33.5" />
          </div>

          {/* Top Dotted Line */}
          <div className="absolute -top-5 left-15 w-18 h-18">
            <svg className="w-full h-full" viewBox="0 0 92 72">
              <path
                d="M5 20 Q70 -22 100 20"
                stroke="#d7daf3"
                strokeWidth="1"
                fill="none"
                strokeDasharray="5 4"
                className="rotate-20"
              />
            </svg>
          </div>

          {/* Bottom Dotted Line */}
          <div className="absolute top-11 left-12 w-18 h-18">
            <svg className="w-full h-full" viewBox="0 0 92 72">
              <path
                d="M0 20 Q18 50 36 38 Q54 25 72 38 Q90 45 100 25"
                stroke="#d7daf3"
                strokeWidth="1"
                fill="none"
                strokeDasharray="5 4"
                className="rotate-10"
              />
            </svg>
          </div>

          {/* Plant */}
          <Image
            src="/plant.png"
            alt="Plant"
            width={35}
            height={35}
            className="absolute top-17 left-1/2 -translate-x-1/2 opacity-70"
          />

          {/* Mail */}
          <div className="absolute top-20 left-15 -translate-x-1/2 bg-[#ffdcdf] rounded-full">
            <div>
              <BsEnvelope className="text-[#fff] text-xs p-[2px]" />
            </div>
          </div>

          {/* Globe */}
          <div className="absolute top-[-5px] left-1/2 -translate-x-1/2 bg-[#ffdcdf] rounded-full">
            <div>
              <CiGlobe className="text-[#fff] text-xs p-[2px]" />
            </div>
          </div>

          {/* Checkmark */}
          <div className="absolute top-3 right-13 bg-[#ffdcdf] rounded-full">
            <div>
              <FaCheck className="text-[#fff] text-[10px] p-[2px]" />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-3 my-2">
          <div className="flex items-center justify-between">
            <h1 className="text-[9px] font-bold text-[#67295F]">{subtitle}</h1>
            <IoChatbubbleEllipsesOutline className="text-xs text-[#67295F] mx-auto" />
          </div>
          <p className="text-[8px] text-gray-700 font-medium mt-1.5 leading-3">
            Before diving in, here are some tips to keep your chats safe and
            enjoyable:
          </p>
        </div>

        {/* Tips List */}
        <div className="space-y-2.5 mb-2">
          {tips?.map((tip: Tip, index: number) => {
            const getIcon = (iconName: string) => {
              switch (iconName) {
                case "BiCool":
                  return <BiCool className="w-3 h-3 text-[#67295F]" />;
                case "FaUser":
                  return <FaUser className="w-3 h-3 text-[#67295F]" />;
                case "FaShieldAlt":
                  return <FaShieldAlt className="w-3 h-3 text-[#67295F]" />;
                case "FaExclamationTriangle":
                  return (
                    <FaExclamationTriangle className="w-3 h-3 text-[#67295F]" />
                  );
                default:
                  return <BiCool className="w-3 h-3 text-[#67295F]" />;
              }
            };

            return (
              <div key={index} className="flex items-center gap-1">
                <div className="w-7 h-7 bg-[#fcedfc] rounded-full flex items-center justify-center flex-shrink-0">
                  {getIcon(tip.icon)}
                </div>
                <div className="flex-1">
                  <p className="text-[8px] font-semibold text-gray-800">
                    {tip.title}:{" "}
                    <span className="text-[7px] text-gray-600 font-medium">
                      {tip.description}
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Continue Button */}
        <div className="text-center">
          <button className="bg-[#67295F] text-white py-2 px-5 mx-auto rounded-full font-semibold text-[10px] hover:bg-[#5a1f4f] transition-colors">
            Continue
          </button>
        </div>
      </div>
    </PhoneMockup>
  );
}

type MessageProps = {
  type: "incoming" | "outgoing";
  position: string;
  rotate?: boolean;
};

function Message({ type, position, rotate }: MessageProps) {
  return (
    <>
      {type === "incoming" && rotate && (
        <div
          className={`bg-purple-100 rounded-bl-none rounded-lg w-4 h-[6px] absolute ${position} rotate-4`}
        />
      )}
      {type === "outgoing" && rotate && (
        <div
          className={`bg-gray-200 rounded-br-none rounded-lg w-4 h-[6px] absolute ${position} rotate-4`}
        />
      )}

      {type === "incoming" && !rotate && (
        <div
          className={`bg-purple-100 rounded-bl-none rounded-lg w-4 h-[6px] absolute ${position}`}
        />
      )}
      {type === "outgoing" && !rotate && (
        <div
          className={`bg-gray-200 rounded-br-none rounded-lg w-4 h-[6px] absolute ${position}`}
        />
      )}
    </>
  );
}
