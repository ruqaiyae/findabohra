import Image from "next/image";
import { CarouselItem } from "@/data/carouselData";
import FeatureDescription from "./FeatureDescription";

type Slide3Props = {
  currentItem: CarouselItem;
};

export default function Slide3({ currentItem }: Slide3Props) {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center my-7">
      <div className="w-1/2 flex justify-center items-center">
        <Image
          src="/slide3.png"
          alt="slide3"
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
