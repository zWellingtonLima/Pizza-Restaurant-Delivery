import Image from "next/image";

import Logo from "./logo";
import Container from "./container";
import CustomElement from "./customElement";

const Footer = () => {
  return (
    <footer>
      <Container className="flex h-[200px] justify-between items-center">
        <div>
          <Logo />
        </div>

        <div className="flex gap-x-32">
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
        </div>

        <div>
          <CustomElement element="h3" className="text-primary-main">
            Redes sociais
          </CustomElement>
          <div className="flex gap-x-2">
            <div className="relative h-[60px] w-[60px]">
              <Image
                src={"/Facebook.svg"}
                alt="Facebook Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative h-[60px] w-[60px]">
              <Image
                src={"/Instagram.svg"}
                alt="Instagram Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative h-[60px] w-[60px]">
              <Image
                src={"/TwitterX.svg"}
                alt="TwitterX Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
