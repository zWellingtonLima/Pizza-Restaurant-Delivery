import { cn } from "@/lib/utils";
import Image from "next/image";

interface GalleryImgProps {
  src: string;
  small?: boolean;
  className?: string;
  alt: string;
}

const GalleryImg = ({ src, className, alt, small }: GalleryImgProps) => {
  return (
    <div
      className={cn(
        `${className} relative`,
        "w-[240px] h-[250px] sm:h-[485px] md:w-[320px] md:h-[595px] lg:w-[360px] lg:h-[635px]",
        small &&
          "w-[240px] h-[230px] sm:h-[230px] md:w-[320px] md:h-[285px] lg:w-[360px] lg:h-[300px]",
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={cn("object-cover rounded-xl")}
      />
    </div>
  );
};

export default GalleryImg;
