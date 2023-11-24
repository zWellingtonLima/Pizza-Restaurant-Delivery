"use client";

import { User2, ShoppingCart } from "lucide-react";
import { Titan_One } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { Button } from "./ui/button";
import { useLoginModal } from "@/hooks/useLoginModal";
import { useRegisterModal } from "@/hooks/useRegisterModal";
import Container from "./container";
import { User } from "@prisma/client";

const titan = Titan_One({
  subsets: ["latin"],
  weight: ["400"],
});

interface HeaderProps {
  currentUser?: User | null;
}

const Header = ({ currentUser }: HeaderProps) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  return (
    <header>
      <Container>
        <div className="flex justify-between items-center py-2">
          <Link
            href={"/"}
            className={`${titan.className} flex items-center gap-x-2`}
          >
            <Image src={"/logo.svg"} alt="Logo" width={60} height={60} />
            <span className="text-2xl text-primary-main">Pizza</span>
          </Link>
          <nav className="flex items-center gap-x-2 font-bold z-10">
            <Button variant="ghost" className="hover:bg-primary-main/20">
              {/* TODO: Add shoppingCart functionality and component */}
              <ShoppingCart className="h-6 w-6  text-primary-main" />
            </Button>
            {/* TODO: Adicionar Modal para login e registrar-se */}
            <Button
              variant="ghost"
              onClick={loginModal.onOpen}
              className="text-white hover:text-white hover:bg-white/10"
            >
              Iniciar sessão
            </Button>
            <Button
              variant="main"
              onClick={registerModal.onOpen}
              className="flex items-center gap-x-2 py-2 px-4 transition"
            >
              <User2 className="h-6 w-6" />
              Registrar-se
            </Button>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
