import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
import { Titan_One } from "next/font/google";

import Container from "./container";
import { Button } from "./ui/button";
import GalleryImg from "./galleryImg";

const titan = Titan_One({
  subsets: ["latin"],
  weight: ["400"],
});

// This component possibly may get instagram hashtags photos from pizzaria restaurant, filter and render by size...

const Gallery = () => {
  return (
    <section className="py-32 h-[1200px] bg-neutral-800">
      <Container>
        <h2
          className={`${titan.className} text-neutral-300 text-6xl mb-28 text-center`}
        >
          Galeria
        </h2>
        <div className="flex justify-between">
          <ChevronLeftCircle className="cursor-pointer w-16 h-16 text-neutral-300" />
          <div className="flex justify-between gap-x-7 mx-4 border-[1px] w-full h-[800px]">
            <div className="relative w-[350px] h-[625px] rounded-full ">
              <GalleryImg src="/womanEating.jpg" alt="Woman eating pizza" />
            </div>
          </div>
          <ChevronRightCircle className="cursor-pointer w-16 h-16 text-neutral-300" />
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
