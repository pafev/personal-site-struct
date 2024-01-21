import "~/styles/globals.css";

import { Abel as FontSans } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import Navbar from "~/components/navbar/navbar";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Struct EJ",
  description: "Struct EJ - Empresa júnior de engenharia de computação",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${fontSans.className} bg-zinc-900 text-zinc-100`}>
        <TRPCReactProvider>
          <Navbar />
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
