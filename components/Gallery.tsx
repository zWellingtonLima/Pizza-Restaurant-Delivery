import Container from "./container";
import GalleryImg from "./galleryImg";
import CustomElement from "./customElement";

const Gallery = () => {
  return (
    <section className="pt-36 pb-44 -mt-14 bg-neutral-800 wavy-t">
      <Container>
        <CustomElement element="h2" className=" text-neutral-200 text-center">
          Galeria
        </CustomElement>
        <div className="relative">
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 place-items-center place-self-center gap-2 sm:gap-6">
            <GalleryImg
              src="/womanEating.jpg"
              alt="Mulher admirando fatia de pizza"
              className="row-span-2"
            />
            <GalleryImg
              small
              src="/ovenPizza.jpg"
              alt="Pizza indo para o forno de pedra"
            />
            <GalleryImg
              small
              src="/pizzaSlice.jpg"
              alt="Pessoa pegando uma fatia de pizza da mesa"
            />
            <GalleryImg
              small
              src="/squarePizza.jpg"
              alt="Pizza cortada em formato retangular"
            />
            <GalleryImg
              small
              src="/specialPizza.jpg"
              alt="Foto de cima de duas pizzas"
            />
          </div>
          {/* Call to DB to put more images */}
          {/* 
          <ChevronLeftCircle className="hover:scale-110 hover:text-primary-main/80 transition z-10 -left-5 absolute top-[45%] cursor-pointer w-16 h-16 text-neutral-300" />
          <ChevronRightCircle className="hover:scale-110 hover:text-primary-main/80 transition z-10 -right-5 absolute top-[45%] cursor-pointer w-16 h-16 text-neutral-300" /> */}
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
