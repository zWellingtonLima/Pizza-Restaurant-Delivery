import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
import { Titan_One } from "next/font/google";

import Container from "./container";
import GalleryImg from "./galleryImg";

const titan = Titan_One({
  subsets: ["latin"],
  weight: ["400"],
});

// This component possibly may get instagram hashtags photos from pizzaria restaurant, filter and render by size...

const Gallery = () => {
  return (
    <section className="pt-36 pb-44 -mt-14 bg-neutral-800 wavy-bt">
      <Container>
        <h2
          className={`${titan.className} text-neutral-300 text-6xl mb-28 text-center`}
        >
          Galeria
        </h2>
        <div className="relative flex justify-between">
          {/* TODO: verify if Gallery imgs are */}
          <ChevronLeftCircle className="hover:scale-110 hover:text-primary-main/80 transition z-10 -left-5 absolute top-[45%] cursor-pointer w-16 h-16 text-neutral-300" />
          <div className="flex justify-evenly w-full">
            <GalleryImg src="/womanEating.jpg" alt="Woman eating pizza" />

            <div className="flex flex-col gap-y-6">
              <GalleryImg src="/ovenPizza.jpg" alt="Pizza at oven" small />
              <GalleryImg
                src="/pizzaSlice.jpg"
                alt="Person holding a Pizza Slice"
                small
              />
            </div>

            <div className="flex flex-col gap-y-6">
              <GalleryImg src="/squarePizza.jpg" alt="Pizza at oven" small />
              <GalleryImg
                src="/specialPizza.jpg"
                alt="Person holding a Pizza Slice"
                small
              />
            </div>
          </div>
          <ChevronRightCircle className="hover:scale-110 hover:text-primary-main/80 transition z-10 -right-5 absolute top-[45%] cursor-pointer w-16 h-16 text-neutral-300" />
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
