import { GoHome, FaRegHeart, BsChatLeftText, MdOutlineUpgrade } from "../icons";
import Image from "next/image";

type PhoneNavbarProps = {
  mt?: string;
  rounded?: string;
};

export default function PhoneNavbar({ rounded, mt }: PhoneNavbarProps) {
  return (
    <div
      className={`flex justify-between items-end ${mt} px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 md:py-1.5 bg-white ${rounded} shadow-[0_0_20px_rgba(103,41,95,0.3)] text-[5px] sm:text-[6px] md:text-[7px]`}
    >
      <div className="flex flex-col items-center justify-center gap-y-[0.5px] sm:gap-y-[1px]">
        <GoHome className="text-gray-500 text-xs sm:text-sm md:text-base font-semibold" />
        <p>Discover</p>
      </div>

      <div className="flex flex-col items-center justify-center gap-y-[0.5px] sm:gap-y-[1px]">
        <FaRegHeart className="text-gray-500 text-xs sm:text-sm md:text-base rotate-40" />
        <p>Likes</p>
      </div>

      <div className="flex flex-col items-center justify-center gap-y-[0.5px] sm:gap-y-[1px]">
        <div className="bg-[#FFEBF9] rounded-full p-0.5 sm:p-0.5">
          <BsChatLeftText className="text-gray-500 text-[8px] sm:text-[10px]" />
        </div>
        <p>Chat</p>
      </div>

      <div className="flex flex-col items-center justify-center gap-y-[0.5px] sm:gap-y-[1px]">
        <MdOutlineUpgrade className="text-gray-500 text-xs sm:text-sm md:text-base" />
        <p>Upgrade</p>
      </div>

      <div className="flex flex-col items-center justify-center gap-y-[0.5px] sm:gap-y-[1px]">
        <Image
          src="/profile-circle.png"
          alt="Profile"
          width={28}
          height={28}
          className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full object-cover"
        />
        <p>Profile </p>
      </div>
    </div>
  );
}
