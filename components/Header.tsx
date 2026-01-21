"use client";

import {
  User2,
  ShoppingCart,
  Menu,
  UserCircle2Icon,
  LogOut,
  Pizza,
} from "lucide-react";

import { signOut } from "next-auth/react";
// import { User } from "@prisma/client";

import { Button } from "./ui/button";
import { useLoginModal } from "@/hooks/useLoginModal";
import { useRegisterModal } from "@/hooks/useRegisterModal";
import Container from "./container";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarImage } from "./ui/avatar";
import Logo from "./logo";
import CustomElement from "./customElement";
import Image from "next/image";

interface HeaderProps {
  // currentUser?: User | null;
}

const Header = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  return (
    <header>
      <Container>
        <div className="z-50 relative flex justify-between items-center py-2">
          <Logo />
          <nav className="flex items-center gap-x-2 font-bold z-10">
            <Button variant="ghost" className="hover:bg-primary-main/20">
              {/* TODO: Add shoppingCart functionality and component */}
              <ShoppingCart className="h-6 w-6  text-primary-main" />
            </Button>

            <div className="hidden sm:flex ">
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
            </div>
          </nav>
        </div>

        <div className="max-w-[240px] sm:max-w-sm md:max-w-xl lg:max-w-2xl xl:max-w-4xl absolute -top-2 right-0">
          <Image
            src={"/heroPizza.svg"}
            width="873"
            height="904"
            priority
            alt="Pizza"
          />
        </div>
      </Container>
    </header>
  );
};

export default Header;
