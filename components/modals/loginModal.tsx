"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Titan_One } from "next/font/google";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useRegisterModal } from "@/hooks/useRegisterModal";
import { useLoginModal } from "@/hooks/useLoginModal";
import Modal from "../ui/Modal";
import { Button } from "../ui/button";
import { Input } from "../ui/input";


const titan = Titan_One({
  subsets: ["latin"],
  weight: ["400"],
});

const formSchema = z.object({
  email: z.string().email({ message: "Informe um e-mail válido." }),
  password: z.string().min(8, {
    message: "Senha precisa ter 8 caracteres no mínimo.",
  }),
});

const LoginModal = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    signIn("credentials", {
      ...values,
      redirect: false,
    }).then((callback) => {
      if (callback?.ok) {
        toast.success("Logado com sucesso");
        router.refresh();
        loginModal.onClose()
      }

      if (callback?.error) {
        toast.error("E-mail ou senha incorreta.");
      }
    });
  };

  const onToggle = () => {
    loginModal.onClose();
    registerModal.onOpen();
  };

  return (
    <Modal
      title="Logar"
      isOpen={loginModal.isOpen}
      onClose={loginModal.onClose}
    >
      <div className="border-t py-5">
        <p className="font-bold mb-1">
          É um prazer ter você novamente à{" "}
          <span className={`${titan.className} text-primary-main`}>Pizza</span>!
        </p>
        <p className="text-neutral-600 text-sm">Logar na sua conta</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="E-mail" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="password" placeholder="Senha" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <Button
              type="submit"
              variant="main"
              className="my-2 w-full rounded-md"
            >
              Confirmar
            </Button>
          </div>
        </form>
      </Form>
      <hr className="my-4" />
      <div className="flex flex-col gap-2 relative">
        <Button
          variant="outline"
          onClick={() => signIn("google")}
          className="text-center rounded-md"
        >
          <FcGoogle size={26} className="absolute left-2" />
          Fazer login com Google
        </Button>
        <Button
          variant="outline"
          onClick={() => signIn("github")}
          className="text-center rounded-md"
        >
          <FaGithub size={26} className="absolute left-2" />
          Fazer login com Github
        </Button>
      </div>
      <div
        className="
          text-neutral-500 
          text-center 
          mt-4 
          font-light"
      >
        <p>
          Quer criar uma conta?
          <span
            // TODO: Adicionar função onToggle para alternar entre os modais register e login
            onClick={onToggle}
            className="
              text-neutral-800
              cursor-pointer 
              hover:underline
            "
          >
            {" "}
            Criar
          </span>
        </p>
      </div>
    </Modal>
  );
};

export default LoginModal;
