import { Star } from "lucide-react";
import Image from "next/image";

type Client = {
  src: string;
  rate: string;
  testimonial: string;
  clientName: string;
};

interface ClientTestimonialProps {
  clients: Client[];
}

const ClientTestimonial = ({ clients }: ClientTestimonialProps) => {
  return (
    <article className="w-[280px] h-[240px] p-6 rounded-xl shadow-md bg-white">
      {clients.map(({ src, testimonial, rate, clientName }, i) => (
        <div key={i}>
          <div className="flex gap-x-2 mb-4">
            <div className="relative w-[64px] h-[64px]">
              <Image
                src={src}
                alt={`Cliente: ${clientName}`}
                fill
                className="object-cover rounded-full shadow-sm shadow-primary-main"
              />
            </div>
            <div className="grid">
              <p className="font-bold">{clientName}</p>
              <span className='flex gap-x-1 font-bold'>
                {rate} <Star className="text-primary-main h-5 w-5" />
              </span>
            </div>
          </div>
          <div>
            <p className="text-neutral-600">{testimonial}</p>
          </div>
        </div>
      ))}
    </article>
  );
};

export default ClientTestimonial;
