import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="fixed z-50 w-full border-b-2 border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between px-8">
        <h2 className="cursor-pointer text-3xl text-sky-400">tokosiceha</h2>
        <div className="flex w-2/3 rounded-xl border-2 border-gray-300 px-5 py-2">
          <Image
            src={"/icon-search.png"}
            width={20}
            height={10}
            alt="icon-search"
          ></Image>
          <input
            type="text"
            placeholder="Cari di Tokosiceha"
            className="w-full px-5 text-sm outline-none"
          />
        </div>
        <div className="flex gap-x-6">
          <Button
            as={Link}
            href="/register"
            variant="bordered"
            className="border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white"
          >
            Register
          </Button>
          <Button className="bg-sky-400 text-white">Login</Button>
        </div>
      </div>
    </nav>
  );
};
