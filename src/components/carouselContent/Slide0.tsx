import Image from "next/image";
import FeatureDescription from "./FeatureDescription";
import { CarouselItem } from "@/data/carouselData";

type Slide0Props = {
  currentItem: CarouselItem;
};

export default function Slide0({ currentItem }: Slide0Props) {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center my-12">
      <div className="w-1/2 flex justify-center items-center">
        <Image
          src="/slide0.png"
          alt="welcome-feature"
          width={300}
          height={400}
          className="w-110 h-110 object-contain"
        />
      </div>
      <div className="w-1/2">
        <FeatureDescription currentItem={currentItem} />
      </div>
    </div>
  );
}
