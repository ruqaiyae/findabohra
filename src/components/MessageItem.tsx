import React from "react";

type MessageItemProps = {
  name: string;
  time: string;
  message: string;
  notification?: number;
};

export default function MessageItem({
  name,
  time,
  message,
  notification,
}: MessageItemProps) {
  return (
    <div className="flex items-center justify-between py-1 sm:py-1.5 md:py-2 px-2 sm:px-3 md:px-4 bg-white rounded-lg shadow-sm border border-gray-100 mb-1 sm:mb-1.5 md:mb-2">
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-1">
        <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-purple-200 rounded-full flex items-center justify-center">
          <span className="text-[8px] sm:text-[9px] md:text-[10px] font-semibold text-purple-700">
            {name.charAt(0).toUpperCase()}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <p className="text-[8px] sm:text-[9px] md:text-[10px] font-semibold text-gray-900 truncate">
              {name}
            </p>
            <p className="text-[6px] sm:text-[7px] md:text-[8px] text-gray-500 ml-2">
              {time}
            </p>
          </div>
          <p className="text-[7px] sm:text-[8px] md:text-[9px] text-gray-600 truncate">
            {message}
          </p>
        </div>
      </div>
      {notification && notification > 0 && (
        <div className="bg-red-500 text-white text-[6px] sm:text-[7px] md:text-[8px] rounded-full w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex items-center justify-center font-semibold">
          {notification}
        </div>
      )}
    </div>
  );
}
