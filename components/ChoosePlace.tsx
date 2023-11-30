"use client"

import ChoosePlaceCard from "./choosePlaceCard";
import { Titan_One } from "next/font/google";

const titan = Titan_One({
  subsets: ["latin"],
  weight: ["400"],
});

const ChoosePlace = () => {
  return (
    <section className="mt-12 pb-28 text-center bg-neutral-200 w-full">
      <h2
        className={`${titan.className} text-neutral-700 text-6xl pt-16 pb-28`}
      >
        Onde gostaria de comer?
      </h2>
      <div className='flex justify-center gap-x-32'>
        <ChoosePlaceCard 
          src="/restaurant.svg"
          onClick={() => {}}
          title="Divirta-se com seu pessoal"
          btnText="Ver restaurante"
        />
        <ChoosePlaceCard 
          src="/delivery.svg"
          onClick={() => {}}
          title="Nós entregamos para você"
          subtitle="Entregas grátis para pedidos acima de 20€"
          btnText="Ver menu"
        />
      </div>
    </section>
  );
};

export default ChoosePlace;
