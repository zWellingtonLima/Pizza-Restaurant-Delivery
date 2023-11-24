"use client";

import LoginModal from "@/components/modals/loginModal";
import RegisterModal from "@/components/modals/registerModal";
import { useEffect, useState } from "react";

const ModalsProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <RegisterModal />
      <LoginModal />
    </>
  );
};

export default ModalsProvider;
