import { Titan_One } from "next/font/google";
import Image from "next/image";

import { Button } from "./ui/button";
import Container from "./container";

const titan = Titan_One({
  subsets: ["latin"],
  weight: ["400"],
});

const Hero = () => {
  return (
    <section className="py-32">
      <Container>
        <div className="flex">
          <div className="space-y-10 z-10 w-[45%]">
            <h1 className={`${titan.className} text-black/80 text-7xl`}>
              Deliciosas pizzas diretamente na sua porta
            </h1>
            <p className={`font-bold text-gray-500 text-xl`}>
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
          <div className="absolute -top-4 right-0 2xl:-top-24 2xl:right-20">
            <Image
              src={"/heroPizza.svg"}
              width="873"
              height="904"
              priority
              alt="Pizza"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
