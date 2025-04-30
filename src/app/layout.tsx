import type { Metadata } from "next";
import { Montserrat, Outfit } from "next/font/google";

import "@/shared/lib/styles/null.scss";
import "@/shared/lib/styles/base.scss";

import { Header } from "@/shared/ui/components/header/Header";
import { Footer } from "@/shared/ui/components/footer/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coinsmax",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${outfit.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
