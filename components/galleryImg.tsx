import { cn } from "@/lib/utils";
import Image from "next/image";

interface GalleryImgProps {
  src: string;
  fullsize?: boolean;
  alt: string;
  className?: string;
}

const GalleryImg = ({ src, fullsize, alt, className }: GalleryImgProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={cn("object-cover rounded-xl", className)}
    />
  );
};

export default GalleryImg;
