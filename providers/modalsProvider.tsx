"use client";

import LoginModal from "@/components/modals/loginModal";
import RegisterModal from "@/components/modals/registerModal";
import { useEffect, useState } from "react";
import ToastProvider from "./toastPtovider";

const ModalsProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <ToastProvider />
      <RegisterModal />
      <LoginModal />
    </>
  );
};

export default ModalsProvider;
