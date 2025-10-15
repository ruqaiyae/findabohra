import Image from "next/image";
import FeatureDescription from "./FeatureDescription";
import { CarouselItem } from "@/data/carouselData";

type Slide6Props = {
  currentItem: CarouselItem;
};

export default function Slide5({ currentItem }: Slide6Props) {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center my-12">
      <div className="w-1/2 flex justify-center items-center">
        <Image
          src="/slide5.png"
          alt="slide5"
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
