"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import axios from "axios";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRegisterModal } from "@/hooks/useRegisterModal";
import { useLoginModal } from "@/hooks/useLoginModal";
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
import Modal from "../ui/Modal";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const titan = Titan_One({
  subsets: ["latin"],
  weight: ["400"],
});

const formSchema = z
  .object({
    email: z.string().email({ message: "Informe um e-mail válido." }),
    name: z
      .string()
      .min(4, {
        message: "Informe um nome.",
      })
      .max(20, {
        message: "Informe um nome menor que 20 caracteres",
      }),
    password: z.string().min(8, {
      message: "Senha precisa ter 8 caracteres no mínimo.",
    }),
    passwordConfirm: z.string(),
  })
  .refine(
    (data) => {
      return data.password === data.passwordConfirm;
    },
    {
      message: "As senhas não são iguais.",
      path: ["passwordConfirm"],
    },
  );

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post("/api/register", values).then(() => {
        toast.success("Conta criada com sucesso");
      });
    } catch (error) {
      toast.error("Houve uma falha no seu registro. Tente novamente");
    }
  };

  const onToggle = () => {
    registerModal.onClose();
    loginModal.onOpen();
  };

  return (
    <Modal
      title="Registrar-se"
      isOpen={registerModal.isOpen}
      onClose={registerModal.onClose}
    >
      <div className="border-t py-5">
        <p className="font-bold mb-1">
          Bem vindo à{" "}
          <span className={`${titan.className} text-primary-main`}>Pizza</span>!
        </p>
        <p className="text-neutral-600 text-sm">Crie sua conta</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Nome" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="email" placeholder="E-mail" {...field} />
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

          <FormField
            control={form.control}
            name="passwordConfirm"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Confirme a senha"
                    {...field}
                  />
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
          // onClick={() => signIn("google")}
          className="text-center rounded-md"
        >
          <FcGoogle size={26} className="absolute left-2" />
          Registrar-se com Google
        </Button>
        <Button
          variant="outline"
          // onClick={() => signIn("github")}
          className="text-center rounded-md"
        >
          <FaGithub size={26} className="absolute left-2" />
          Registrar-se com Github
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
          Já possui uma conta?
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
            Logar
          </span>
        </p>
      </div>
    </Modal>
  );
};

export default RegisterModal;
