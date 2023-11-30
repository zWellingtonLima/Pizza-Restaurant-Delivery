import { Titan_One } from "next/font/google";
import { LuSalad, LuChefHat } from "react-icons/lu";
import { MdDeliveryDining } from "react-icons/md";

import Info from "./info";

const titan = Titan_One({
  subsets: ["latin"],
  weight: ["400"],
});

const WhyUs = () => {
  const contentInfo = [
    {
      id: 1,
      icon: LuSalad,
      title: "Ingredientes Frescos",
      content:
        "Oferecemos pizzas de alta qualidade com ingredientes frescos, garantindo que cada fatia seja uma explosão de sabor.",
    },
    {
      id: 2,
      icon: LuChefHat,
      title: "Melhores Chefes",
      content:
        "Nossos excepcionais chefes elevam a qualidade a um patamar superior. Com talento culinário e paixão, eles criam pizzas inigualáveis para você apreciar.",
    },
    {
      id: 3,
      icon: MdDeliveryDining,
      title: "Entrega Rápida",
      content:
        "Desfrute da conveniência de entregas rápidas. Nossas pizzas frescas chegam à sua porta com agilidade, garantindo que você saboreie o melhor em casa.",
    },
  ];

  return (
    <section className="mt-12 pb-28 text-center">
      <h4 className="text-neutral-500 font-bold">Nosso Serviço</h4>
      <h2 className={`${titan.className} text-neutral-700 text-6xl mb-28`}>
        Por que nos escolher
      </h2>
      <div className="flex items-center justify-center gap-x-12">
        {contentInfo.map((item) => (
          <Info
            key={item.id}
            title={item.title}
            iconSize="lg"
            content={item.content}
            reactIcon={item.icon}
            background={item.id === 2}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
