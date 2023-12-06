import Image from "next/image";

import { Titan_One } from "next/font/google";
import { Button } from "./ui/button";
const titan = Titan_One({
  subsets: ["latin"],
  weight: ["400"],
});

const Promotion = () => {
  return (
    <section className="bg-neutral-900">
      <div>
        <div>
          <h2 className={`${titan.className}`}>Promoção</h2>
          <p className={`${titan.className}`}>
            Primeira vez aqui?
            <br /> Oferecemos um{" "}
            <span className="text-primary-main/80">desconto de 10%</span> no seu
            primeiro pedido
          </p>
          <Button variant={"main"}>Cadastre-se</Button>
        </div>
        <p className="text-primary-main/60">Ver condições da promoção</p>
      </div>
      <div className="relative">
        <Image src={""} alt={""} fill className="object-cover" />
      </div>
    </section>
  );
};

export default Promotion;
