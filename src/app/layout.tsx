import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import BackgroundHome from "@/components/BackgroundHome";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sweet Bistró",
  description:
    "Descubre nuestro delicioso menú y disfruta de una experiencia culinaria única en Sweet Bistró. ¡Ven y prueba lo mejor en cocina!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
        rel="shortcut icon"
        href="/favicon-logo.png"
        type="image/x-icon"
        sizes="32x32 192x192 "
      />
      <body className={inter.className}>
        <BackgroundHome />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
