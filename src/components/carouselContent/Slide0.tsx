import Image from "next/image";
import { PhoneMockup } from "../ui/PhoneMockup";

export default function Slide0() {
  return (
    <PhoneMockup marginLeft="mx-auto" rotate="rotate-0">
      <div className="w-full h-[90%] flex flex-col justify-center items-center px-4">
        <Image
          src="/welcome-feature.png"
          alt="welcome-feature"
          width={300}
          height={400}
          className="w-full h-full object-contain"
        />
      </div>
    </PhoneMockup>
  );
}
