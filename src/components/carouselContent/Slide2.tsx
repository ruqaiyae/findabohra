import Image from "next/image";
import { CarouselItem } from "@/data/carouselData";
import FeatureDescription from "./FeatureDescription";

type Slide2Props = {
  currentItem: CarouselItem;
};

export default function Slide2({ currentItem }: Slide2Props) {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center my-12">
      <div className="w-1/2 flex justify-center items-center">
        <Image
          src="/slide2.png"
          alt=""
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
