import { FaHeart, HiMiniXMark } from "../icons";

export default function ProfileActions() {
  return (
    <div className="flex justify-center mb-1">
      <div className="flex items-center justify-around absolute bottom-12 z-10 w-[45%] mx-auto bg-white rounded-full py-1 px-1 text-[6px] font-medium text-gray-700 shadow-[0_0_10px_rgba(103,41,95,0.4)]">
        <div className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-full shadow-md flex items-center justify-center border-gray-200">
          <HiMiniXMark className="text-lg md:text-2xl font-black text-[#67295F]" />
        </div>
        <div className="w-6 h-6 md:w-8 md:h-8 bg-[#B23AA8] rounded-full shadow-md flex items-center justify-center">
          <FaHeart className="text-sm md:text-lg text-white" />
        </div>
      </div>
    </div>
  );
}
