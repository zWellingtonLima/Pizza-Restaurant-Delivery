import Image from "next/image";

import { Button } from "./ui/button";
import CustomElement from "./customElement";

const Hero = () => {
  return (
    <section className="relative z-30 py-4 sm:py-12 md:py-20">
      <div className="space-y-10 z-10 w-[85%] sm:w-[45%]">
        <CustomElement
          element="h1"
          className=" text-black/90 text-2xl md:text-5xl lg:text-7xl"
        >
          Deliciosas pizzas diretamente na sua porta
        </CustomElement>
        <p className="max-w-sm md:max-w-xs text-neutral-700 text-xl">
          Peça e mergulhe na melhor experiência de pizza da cidade!
        </p>
        <Button variant="main" className="gap-3 p-6 text-base">
          Pedir agora
          <Image
            src={"/deliveryScooter.svg"}
            alt="scooterDelivery"
            width={24}
            height={24}
          />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
