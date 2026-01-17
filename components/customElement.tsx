import { cn } from "@/lib/utils";
import { Titan_One } from "next/font/google";

const titan = Titan_One({
  subsets: ["latin"],
  weight: ["400"],
});

interface CustomElement {
  element?: keyof JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
}

const CustomElement = ({ element, className, children }: CustomElement) => {
  const Element = element || "div";

  return (
    <Element
      className={cn(
        `${titan.className} ${className}`,
        element === "h2"
          ? `text-2xl md:text-3xl lg:text-4xl xl:text-6xl mb-8 md:mb-12 lg:mb-20 xl:mb-28 ${className}`
          : `${className}`,
      )}
    >
      {children}
    </Element>
  );
};

export default CustomElement;
