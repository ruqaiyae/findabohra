import { CarouselItem } from "./typeLib";

type FeatureDescriptionProps = {
  currentItem: CarouselItem;
};

export default function FeatureDescription({
  currentItem,
}: FeatureDescriptionProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-3xl font-bold text-gray-900">{currentItem.title}</h3>
      <p className="text-lg text-gray-600 leading-relaxed">
        {currentItem.description}
      </p>
    </div>
  );
}
