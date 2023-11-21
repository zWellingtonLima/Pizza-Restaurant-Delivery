"use client";

import { useRegisterModal } from "@/hooks/useModal";
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

const formSchema = z.object({
  email: z.string().email({ message: "Informe um e-mail válido." }),
  name: z.string().min(4, {
    message: "Informe um nome.",
  }),
  password: z.string().min(8, {
    message: "Senha precisa ter 8 caracteres no mínimo.",
  }),
});

const RegisterModal = () => {
  const registerModal = useRegisterModal();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Modal
      title="Registrar-se"
      isOpen={registerModal.isOpen}
      onClose={registerModal.onClose}
    >
      <div className="border-t py-5">
        <p className="text-neutral-800 mb-1">
          Bem vindo à{" "}
          <span className={`${titan.className} text-primary-main`}>Pizza</span>!
        </p>
        <p className="text-neutral-600 text-sm">Crie sua conta</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
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
            <Button type="submit" variant="main" className="mt-2 w-full">
              Confirmar
            </Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
};

export default RegisterModal;
