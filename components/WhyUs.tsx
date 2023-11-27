import { Titan_One } from "next/font/google";
import { ChefHat, Leaf, LucideProps } from "lucide-react";

import Info from "./info";

const titan = Titan_One({
  subsets: ["latin"],
  weight: ["400"],
});

const lucideIcons: Record<string, React.FC<LucideProps>> = {
  ChefHat,
  Leaf,
  
};

const WhyUs = () => {
  const contentInfo = [
    {
      id: 1,
      icon: "",
      title: "Melhores Chefes",
      content: "Nossos excepcionais chefes elevam a qualidade a um patamar superior. Com talento culinário e paixão, eles criam pizzas inigualáveis para você apreciar.",
    },
    {
      id: 2,
      icon: "",
      title: "Ingredientes Frescos",
      content: "Oferecemos pizzas de alta qualidade com ingredientes frescos, garantindo que cada fatia seja uma explosão de sabor.",
    },
    {
      id: 3,
      icon: "",
      title: "Entrega Rápida",
      content: "Desfrute da conveniência de entregas rápidas. Nossas pizzas frescas chegam à sua porta com agilidade, garantindo que você saboreie o melhor em casa.",
    },
  ];
  

  return (
    <section className="py-16">
      <h4>Nosso Serviço</h4>
      <h2 className={titan.className}>Por que nos escolher</h2>
      <div className="flex items-center justify-center gap-x-12">
        
        <Info title="" iconSize="lg" content="" />
      </div>
    </section>
  );
};

export default WhyUs;
