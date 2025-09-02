import Image from "next/image";
import { FaImage } from "./icons";

interface MessageItemProps {
  avatar?: string;
  name: string;
  time: string;
  message: string;
  notification?: number;
}

const MessageItem: React.FC<MessageItemProps> = ({
  avatar,
  name,
  time,
  message,
  notification,
}) => {
  return (
    <div className="flex gap-1 sm:gap-1.5 md:gap-2">
      {avatar ? (
        <Image
          src={avatar}
          alt={`${name}'s avatar`}
          width={48}
          height={40}
          className="w-8 h-7 sm:w-10 sm:h-8 md:w-12 md:h-10 rounded-full object-cover my-1 sm:my-1.5 md:my-2"
        />
      ) : (
        <div className="w-8 h-5 sm:w-10 sm:h-8 md:w-12 md:h-10 rounded-full bg-gray-200 my-1 sm:my-1.5 md:my-2" />
      )}
      <div className="flex flex-col justify-center my-1 sm:my-1.5 md:my-2 w-full">
        <div className="flex justify-between">
          <p className="text-[8px] sm:text-[9px] md:text-[10px] font-semibold">
            {name}
          </p>
          <p className="text-[6px] sm:text-[7px] md:text-[8px] text-gray-500">
            {time}
          </p>
        </div>
        <div className="flex justify-between">
          {message === "Image" ? (
            <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
              <FaImage className="text-gray-400 text-[8px] sm:text-[10px] md:text-xs" />
              <p className="text-[8px] sm:text-[9px] md:text-[10px] text-gray-500">
                {message}
              </p>
            </div>
          ) : (
            <p className="text-[8px] sm:text-[9px] md:text-[10px] text-gray-500">
              {message}
            </p>
          )}
          {notification && (
            <div className="bg-[#67295F] px-[4px] py-[1px] sm:px-[5px] sm:py-[1.5px] md:px-[6.5px] md:py-[2px] rounded-full">
              <p className="text-[6px] sm:text-[7px] md:text-[8px] text-white">
                {notification}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
