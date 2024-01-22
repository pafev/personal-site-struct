import "~/styles/globals.css";

import { Abel as FontSans } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import Navbar from "~/components/navbar/navbar";
import Footer from "~/components/footer/footer";
import { type Metadata } from "next";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Struct EJ",
  description: "Struct EJ - Empresa júnior de engenharia de computação",
  icons: {icon: "/foguete.png"}
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${fontSans.className} bg-gradient-to-br from-zinc-900 via-slate-900 to-sky-900 text-zinc-100`}>
        <TRPCReactProvider>
          <Navbar />
          {children}
          <Footer/>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
