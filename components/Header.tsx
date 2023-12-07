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
import { User } from "@prisma/client";

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
          <Logo />
          <nav className="flex items-center gap-x-2 font-bold z-10">
            <Button variant="ghost" className="hover:bg-primary-main/20">
              {/* TODO: Add shoppingCart functionality and component */}
              <ShoppingCart className="h-6 w-6  text-primary-main" />
            </Button>

            {currentUser ? (
              <div className="flex items-center justify-between gap-x-4">
                <CustomElement element="p" className="text-white">
                  Your <span className="text-primary-main">Pizza</span>
                </CustomElement>
                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex gap-x-2 border-neutral-400 text-white shadow-lg items-center border-[1px] p-2 rounded-xl hover:bg-primary-main/30 transition">
                      <Menu size={24} />
                      <Avatar>
                        {currentUser ? (
                          <AvatarImage src={currentUser?.image as string} />
                        ) : (
                          <UserCircle2Icon size={30} />
                        )}
                      </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Pizza className="w-4 h-4 mr-2" />
                        Seus pedidos
                      </DropdownMenuItem>
                      <hr />
                      <DropdownMenuItem onClick={() => signOut()}>
                        <LogOut className="w-4 h-4 mr-2" />
                        Deslogar
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ) : (
              <>
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
              </>
            )}
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
