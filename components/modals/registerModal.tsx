"use client";

import { X } from "lucide-react";
import { Titan_One } from "next/font/google";
import { useState, useEffect, useCallback } from "react";
import { Button } from "../ui/button";
import { useRegisterModal } from "@/hooks/useModal";
import Modal from "../ui/Modal";

const titan = Titan_One({
  subsets: ["latin"],
  weight: ["400"],
});

const RegisterModal = () => {
  const registerModal = useRegisterModal();

  return (
    <Modal
      title="Registrar-se"
      isOpen={registerModal.isOpen}
      onClose={registerModal.onClose}
    >
      <div className="border-t pt-2">
        <p className='text-neutral-600'>
          Bem vindo à{" "}
          <span className={`${titan.className} text-primary-main`}>Pizza</span>
        </p>
      </div>
    </Modal>
  );
};

export default RegisterModal;
