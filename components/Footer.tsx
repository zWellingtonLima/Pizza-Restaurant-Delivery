import Image from "next/image";

import Logo from "./logo";
import CustomElement from "./customElement";

const Footer = () => {
  return (
    <footer className="max-w-6xl mx-auto py-8 px-2 grid gap-2 md:gap-4 sm:grid-cols-2 sm:place-items-center md:grid-cols-4 justify-center items-center">
      <div>
        <Logo />
      </div>

      <div>
        <CustomElement element="h3" className="text-primary-main">
          Nossos serviços
        </CustomElement>
        <div className="font-bold">
          <p>Entrega</p>
          <p>Restaurante</p>
          <p>Promoção</p>
        </div>
      </div>

      <div>
        <CustomElement element="h3" className="text-primary-main">
          Nossos contatos
        </CustomElement>
        <div className="font-bold">
          <p>(+351) 999-999-999</p>
          <p>Avenida do Porto, Porto 123</p>
        </div>
      </div>

      <div>
        <CustomElement element="h3" className="text-primary-main">
          Redes sociais
        </CustomElement>
        <div className="flex gap-x-2">
          <div className="relative h-[40px] w-[40px] sm:h-[60px] sm:w-[60px]">
            <Image
              src={"/Facebook.svg"}
              alt="Facebook Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative h-[40px] w-[40px] sm:h-[60px] sm:w-[60px]">
            <Image
              src={"/Instagram.svg"}
              alt="Instagram Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative h-[40px] w-[40px] sm:h-[60px] sm:w-[60px]">
            <Image
              src={"/TwitterX.svg"}
              alt="TwitterX Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
