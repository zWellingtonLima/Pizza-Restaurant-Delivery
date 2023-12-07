"use client"

import Image from "next/image";

import { Titan_One } from "next/font/google";
import { useRegisterModal } from "@/hooks/useRegisterModal";

const titan = Titan_One({
  subsets: ["latin"],
  weight: ["400"],
});

import { Button } from "./ui/button";
import Container from "./container";

const Promotion = () => {
  const registerModal = useRegisterModal();

  return (
    <section className="bg-neutral-950 pt-24 pb-4 wavy-t -mt-20">
      <Container className="gap-x-4 flex justify-between ">
        <div className="grid">
          <div className="text-neutral-200 justify-center gap-y-12 flex flex-col">
            <h2 className={`${titan.className}  text-4xl`}>Promoção</h2>
            <p className={`${titan.className} text-lg`}>
              Primeira vez aqui?
              <br /> Oferecemos um{" "}
              <span className="text-primary-main">desconto de 10%</span> no seu
              primeiro pedido!
            </p>
            <Button variant={"main"} onClick={registerModal.onOpen} className="text-base self-start w-[35%] h-[45px] text-white">
              Cadastre-se
            </Button>
          </div>
          <p className="text-primary-main self-end underline">
            {/* TODO: add modal or a link to promotion conditions */}
            Ver condições da promoção
          </p>
        </div>
        <div className="relative w-[60%] h-[600px] overflow-hidden">
          <Image
            src={"/promotionPizza.jpg"}
            alt={"Promotion Pizza"}
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </Container>
    </section>
  );
};

export default Promotion;
