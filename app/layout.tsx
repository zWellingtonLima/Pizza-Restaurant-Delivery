import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Modal from "@/components/modals/registerModal";
import ModalsProvider from "@/providers/modalsProvider";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Pizza",
  description: "The best city pizza.",
  icons: [
    {
      url: "/logo.png",
      href: "logo.png",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ModalsProvider />
        <Header/>
        {children}
      </body>
    </html>
  );
}
