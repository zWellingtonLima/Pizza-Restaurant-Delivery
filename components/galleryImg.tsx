import { cn } from "@/lib/utils";
import Image from "next/image";

interface GalleryImgProps {
  src: string;
  small?: boolean;
  alt: string;
}

const GalleryImg = ({ src, small, alt }: GalleryImgProps) => {
  return (
    <div className={cn("relative w-[350px] h-[625px]", small && "w-[380px] h-[300px]")}>
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
