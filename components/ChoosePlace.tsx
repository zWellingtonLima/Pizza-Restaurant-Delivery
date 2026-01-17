"use client";

import ChoosePlaceCard from "./choosePlaceCard";
import CustomElement from "./customElement";

const ChoosePlace = () => {
  return (
    <section className="pt-28 pb-40 text-center bg-neutral-200 w-full wavy-t">
      <CustomElement element="h2" className=" text-neutral-700">
        Onde gostaria de comer?
      </CustomElement>
      <div className="flex-col md:flex-row flex items-center justify-center gap-12">
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
