import { Titan_One } from "next/font/google";

import ClientTestimonial from "./clientTestimonial";
import CustomElement from "./customElement";

const titan = Titan_One({
  subsets: ["latin"],
  weight: ["400"],
});

const clients = [
  {
    rate: "4.9",
    testimonial:
      "Uma experiência gastronômica incrível! As pizzas são deliciosas e a equipe é super atenciosa. Recomendo a todos!",
    clientName: "Artem Podrez",
    src: "/artem.svg",
  },
];

const OurClients = () => {
  return (
    <section className=" -mt-14 z-0 py-20 bg-neutral-900 wavy-t">
      <div className="flex flex-col lg:flex-row mx-4 md:mx-12 justify-evenly gap-8">
        <div className="flex flex-col items-center justify-center gap-y-12">
          <h2
            className={`${titan.className} text-center text-4xl text-neutral-300`}
          >
            O que dizem nossos clientes?
          </h2>
          <p className="text-neutral-300 max-w-sm">
            Nós utilizamos ingredientes frescos e selecionados para garantir que
            nossas pizzas tenham o melhor sabor e qualidade. Nosso objetivo é
            proporcionar a você a melhor experiência em pizza.
          </p>
          <article className="flex justify-center gap-4 [&>*]:grid [&>*]:place-items-center">
            <div>
              <CustomElement
                element="span"
                className="text-primary-main text-3xl"
              >
                15k +
              </CustomElement>
              <p className="text-neutral-400">Clientes satisfeitos</p>
            </div>
            <div>
              <CustomElement
                element="span"
                className="text-primary-main text-3xl"
              >
                12
              </CustomElement>
              <p className="text-neutral-400">Prêmios recebidos</p>
            </div>
            <div>
              <CustomElement
                element="span"
                className="text-primary-main text-3xl"
              >
                25+
              </CustomElement>
              <p className="text-neutral-400">Pizzas no menu</p>
            </div>
          </article>
        </div>

        <div className="z-20 gap-2 md:gap-4 grid sm:grid-cols-2 place-self-center">
          <ClientTestimonial clients={clients} />
          <ClientTestimonial clients={clients} />
          <ClientTestimonial clients={clients} />
          <ClientTestimonial clients={clients} />
        </div>
      </div>
    </section>
  );
};

export default OurClients;
