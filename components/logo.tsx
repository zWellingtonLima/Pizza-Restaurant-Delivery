import Image from "next/image";
import Link from "next/link";
import { Titan_One } from "next/font/google";

const titan = Titan_One({
  subsets: ["latin"],
  weight: ["400"],
});

const Logo = () => {
  return (
    <Link href={"/"} className={`${titan.className} flex items-center gap-x-2`}>
      <Image src={"/logo.svg"} alt="Logo" width={60} height={60} />
      <span className="text-2xl text-primary-main">Pizza</span>
    </Link>
  );
};

export default Logo;
