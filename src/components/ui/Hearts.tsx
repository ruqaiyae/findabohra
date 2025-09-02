import Image from "next/image";

type HeartsProps = {
  scale?: string;
};

export function Hearts({ scale }: HeartsProps) {
  return (
    <Image
      src="/hearts.png"
      alt="hearts"
      width={200}
      height={200}
      className={`w-25 h-25 md:w-48 md:h-48 object-contain ${scale}`}
    />
  );
}
