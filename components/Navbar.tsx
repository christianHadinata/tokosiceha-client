import { useAuth } from "../contexts/AuthContext";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const Navbar = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");

  const handleEnterSearchQuery = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  if (loading) {
    return (
      <nav className="fixed z-50 w-full border-b-2 border-gray-200 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between px-8">
          <h2 className="cursor-pointer text-3xl text-sky-400">tokosiceha</h2>
          <div className="flex w-2/3 rounded-xl border-2 border-gray-300 px-5 py-2">
            <Image
              src={"/icon/search-1.png"}
              width={20}
              height={10}
              alt="search"
              className="contrast-0"
            ></Image>
            <input
              type="text"
              placeholder="Cari di Tokosiceha"
              className="w-full px-5 text-sm placeholder-gray-600 outline-none"
            />
          </div>

          <div className="flex gap-x-6">
            <Button
              as={Link}
              href="/register"
              variant="bordered"
              className="invisible border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white"
            >
              Register
            </Button>
            <Button
              as={Link}
              href="/login"
              className="invisible bg-sky-400 text-white"
            >
              Login
            </Button>
          </div>
        </div>
      </nav>
    );
  }
  return (
    <nav className="fixed z-50 w-full border-b-2 border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between px-8">
        <Link href={"/"} className="cursor-pointer text-3xl text-sky-400">
          tokosiceha
        </Link>
        <div className="flex w-2/3 rounded-xl border-2 border-gray-300 px-5 py-2">
          <Image
            src={"/icon/search-1.png"}
            width={20}
            height={10}
            alt="search"
            className="contrast-0"
          ></Image>
          <input
            type="text"
            placeholder="Cari di Tokosiceha"
            className="w-full px-5 text-sm placeholder-gray-600 outline-none"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleEnterSearchQuery}
          />
        </div>
        {user ? (
          <div className="flex items-center gap-x-6">
            <Link
              href={"/cart"}
              className="rounded-md p-2 hover:bg-gray-100 focus:bg-gray-200"
            >
              <Image
                src={"/icon/cart-1.png"}
                width={25}
                height={25}
                alt="cart"
                className="contrast-[.25]"
              ></Image>
            </Link>
            <Link
              href={"/profile"}
              className="rounded-md p-2 hover:bg-gray-100 focus:bg-gray-200"
            >
              <Image
                src={"/icon/profile-1.png"}
                width={25}
                height={25}
                alt="cart"
                className="contrast-[.25]"
              ></Image>
            </Link>
          </div>
        ) : (
          <div className="flex gap-x-6">
            <Button
              as={Link}
              href="/register"
              variant="bordered"
              className="border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white"
            >
              Register
            </Button>
            <Button as={Link} href="/login" className="bg-sky-400 text-white">
              Login
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
