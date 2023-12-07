import Logo from "./logo";
import Container from "./container";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <Container className='flex justify-between items-center'>
        <div>
          <Logo />
        </div>

        <div>
          <div>
            <h3>Nossos serviços</h3>
            <p>Entrega</p>
            <p>Restaurante</p>
            <p>Promoção</p>
          </div>
          <div>
            <h3>Nossos contatos</h3>
            <p>(+351) 999-999-999</p>
            <p>Avenida do Porto, Porto 123</p>
          </div>
        </div>

        <div>
          <h3>Redes sociais</h3>
          <div>
            <div className="relative h-[60px] w-[60px]">
              <Image
                src={"/Facebook.svg"}
                alt="Facebook Logo"
                fill
                className="object-contain"
              />
            </div>
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
      </Container>
    </footer>
  );
};

export default Footer;
