import Image from "next/image";
import { Button } from "./ui/button";

import { Titan_One } from "next/font/google";
import { cn } from "@/lib/utils";

const titan = Titan_One({
  subsets: ["latin"],
  weight: ["400"],
});

interface ChoosePlaceCardProps {
  src: string;
  title: string;
  active?: boolean;
  subtitle?: string;
  btnText: string;
  onClick: () => void;
}

const ChoosePlaceCard = ({
  src,
  active,
  title,
  subtitle,
  btnText,
  onClick,
}: ChoosePlaceCardProps) => {
  return (
    <div className="rounded-xl shadow-xl bg-white/90 py-6 px-4 flex flex-col justify-between">
      <div className="w-80 h-80 relative">
        <Image src={src} alt="Choose where to eat" fill />
      </div>
      <div
        className="flex flex-col flex-wrap
      content-center"
      >
        <p
          className={cn(
            "font-bold text-lg text-neutral-600",
            !subtitle && "pb-6"
          )}
        >
          {title}
        </p>
        {subtitle && (
          <p className="text-sm text-neutral-500 font-bold mb-2">{subtitle}</p>
        )}
        <Button
        // TODO: active status change btn color
          variant='blue'
          onClick={onClick}
          className={`${titan.className} font-bold text-lg max-w-[300px]`}
        >
          {btnText}
        </Button>
      </div>
    </div>
  );
};

export default ChoosePlaceCard;
