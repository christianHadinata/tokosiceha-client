import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { HeroUIProvider } from "@heroui/react";
import NavbarWrapper from "@/components/NavbarWrapper";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Tokosiceha",
  description: "E-Commerce terlengkap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} `}>
        <HeroUIProvider>
          <NavbarWrapper />
          {children}
        </HeroUIProvider>
      </body>
    </html>
  );
}
