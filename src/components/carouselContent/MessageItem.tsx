import Image from "next/image";
import React from "react";

type MessageItemProps = {
  image: string;
  name: string;
  time: string;
  message: string;
  notification?: number;
};

export default function MessageItem({
  name,
  image,
  time,
  message,
  notification,
}: MessageItemProps) {
  return (
    <div className="flex items-center justify-between py-1 sm:py-1.5 md:py-2 px-2 sm:px-3 md:px-4 bg-white rounded-lg shadow-sm border border-gray-100 mb-1 sm:mb-1.5 md:mb-2">
      <div className="flex items-center gap-1 sm:gap-2 md:gap-3 flex-1">
        <Image
          src={image}
          alt={name}
          width={20}
          height={20}
          className="rounded-full"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <p className="text-[8px] sm:text-[9px] md:text-[10px] font-semibold text-gray-900 truncate">
              {name}
            </p>
            <p className="text-[4px] sm:text-[5px] md:text-[6px] text-gray-500 ml-2">
              {time}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[7px] sm:text-[8px] md:text-[9px] text-gray-600 truncate">
              {message}
            </p>
            {notification && notification > 0 && (
              <div className="bg-red-500 text-white text-[4px] sm:text-[5px] md:text-[6px] rounded-full w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 flex items-center justify-center font-semibold">
                {notification}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
