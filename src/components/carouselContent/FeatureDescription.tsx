import { CarouselItem } from "./typeLib";

type FeatureDescriptionProps = {
  currentItem: CarouselItem;
};

export default function FeatureDescription({
  currentItem,
}: FeatureDescriptionProps) {
  return (
    <div className="w-[80%] md:w-full mx-auto text-center md:text-left space-y-2 md:space-y-6">
      <h3 className="text-lg md:text-3xl font-bold text-gray-900">{currentItem.title}</h3>
      <p className="text-sm md:text-lg text-gray-600 leading-relaxed">
        {currentItem.description}
      </p>
    </div>
  );
}
