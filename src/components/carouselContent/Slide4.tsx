import Image from "next/image";
import { CarouselItem } from "@/data/carouselData";
import FeatureDescription from "./FeatureDescription";

type Slide4Props = {
  currentItem: CarouselItem;
};

export default function Slide4({ currentItem }: Slide4Props) {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center my-12">
      <div className="w-1/2 flex justify-center items-center">
        <Image
          src="/slide4.png"
          alt="slide4"
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
