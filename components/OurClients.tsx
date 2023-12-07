import { Titan_One } from "next/font/google";
import ClientTestimonial from "./clientTestimonial";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import CustomElement from "./customElement";

const titan = Titan_One({
  subsets: ["latin"],
  weight: ["400"],
});

const OurClients = () => {
  const clients = [
    {
      rate: "4.9",
      testimonial:
        "Uma experiência gastronômica incrível! As pizzas são deliciosas e a equipe é super atenciosa. Recomendo a todos!",
      clientName: "Artem Podrez",
      src: "/artem.svg",
    },
  ];

  return (
    <section className="-mt-14 flex pb-4 bg-neutral-50">
      <div className="w-[70%] z-0 bg-neutral-900 wavy-t rounded-r-xl pb-16">
        <div className="flex flex-col items-center justify-center gap-y-12 pt-20">
          <h2 className={`${titan.className} text-4xl text-neutral-300`}>
            O que dizem nossos clientes?
          </h2>
          <p className="text-neutral-400 w-[50%]">
            Nós utilizamos ingredientes frescos e selecionados para garantir que
            nossas pizzas tenham o melhor sabor e qualidade. Nosso objetivo é
            proporcionar a você a melhor experiência em pizza.
          </p>
          <article className="w-[50%] flex justify-between">
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
      </div>
      <div className="relative w-[40%] z-20">
        <ScrollArea className="absolute top-[25%] pb-6 -left-[10%]">
          <div className="flex gap-x-6 p-1">
            <ClientTestimonial clients={clients} />
            <ClientTestimonial clients={clients} />
            <ClientTestimonial clients={clients} />
            <ClientTestimonial clients={clients} />
            <ClientTestimonial clients={clients} />
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
};

export default OurClients;
