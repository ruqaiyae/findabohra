import Image from "next/image";
import FeatureDescription from "./FeatureDescription";
import { CarouselItem } from "@/data/carouselData";

type Slide1Props = {
  currentItem: CarouselItem;
};

export default function Slide1({ currentItem }: Slide1Props) {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center my-7">
      <div className="w-1/2 flex justify-center items-center">
        <Image
          src="/slide1.png"
          alt="slide1"
          width={300}
          height={400}
          className="w-120 h-120 object-contain"
        />
      </div>
      <div className="w-1/2">
        <FeatureDescription currentItem={currentItem} />
      </div>
    </div>
  );
}
