"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/Navbar";

export default function NavbarWrapper() {
  const pathname = usePathname();

  const hideNavBar = pathname === "/login" || pathname === "/register";

  return !hideNavBar ? (
    <>
      <Navbar />
      <div className="h-20"></div>
    </>
  ) : null;
}
