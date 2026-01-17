import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import ModalsProvider from "@/providers/modalsProvider";
// import getCurrentUser from "./actions/getCurrentUser";
import Footer from "@/components/Footer";

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={roboto.className}>
        <ModalsProvider />
        {/* <Header currentUser={currentUser}/> */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
