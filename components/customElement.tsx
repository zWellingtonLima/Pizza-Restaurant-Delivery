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
    <Element className={`${titan.className} ${className}`}>{children}</Element>
  );
};

export default CustomElement;
