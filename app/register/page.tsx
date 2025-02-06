"use client";
import React, { useState } from "react";
import { Input } from "@heroui/input";
import { Button, ButtonGroup } from "@heroui/button";
import Link from "next/link";
import { EyeSlashFilledIcon } from "@/components/EyeSlashFilledIcon";
import { EyeFilledIcon } from "@/components/EyeFilledIcon";
import { AxiosInstance } from "@/utils/axiosInstance";
import Image from "next/image";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";

export default function page() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isVisible, setIsVisible] = useState(false);

  const router = useRouter();

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username || !email || !password) {
      toast.error("All Field Must Be Specified!");
    } else {
      try {
        const { data } = await AxiosInstance.post(
          `http://localhost:5000/api/v1/users/register`,
          {
            user_email: email,
            user_password: password,
            user_name: username,
          },
        );

        if (data.user_id) {
          router.push("/login?registered=true");
        }
      } catch (error: any) {
        const msg = error.response?.data?.message + "!";
        toast.error(msg);
      }
    }
  };
  return (
    <div className="flex">
      <div className="flex h-screen w-1/2 items-center justify-center rounded-br-full bg-sky-400">
        <div className="mb-32 mr-32 flex items-center justify-center">
          <Image
            src={"/logo-tokosiceha/white.png"}
            width={100}
            height={100}
            alt="logo"
          ></Image>
          <h1 className="cursor-default text-6xl text-white">tokosiceha</h1>
        </div>
      </div>
      <div className="flex h-screen w-1/2 flex-col items-center justify-center">
        <div className="w-1/2">
          <Link
            href={"/"}
            className="text-xl font-normal text-sky-400 hover:text-sky-300"
          >
            {"< "}Back to home
          </Link>
          <div className="mt-2 p-10 shadow-lg shadow-slate-200">
            <h1 className="pb-10 text-center text-4xl font-semibold">
              Register
            </h1>
            <form className="flex flex-col gap-y-5" onSubmit={handleSubmit}>
              <Input
                label="Username"
                type="text"
                variant="underlined"
                size="lg"
                isClearable
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                label="Email"
                type="email"
                variant="underlined"
                size="lg"
                isClearable
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                label="Password"
                type={isVisible ? "text" : "password"}
                variant="underlined"
                size="lg"
                endContent={
                  <button
                    aria-label="toggle password visibility"
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <EyeFilledIcon className="pointer-events-none text-2xl text-default-400" />
                    ) : (
                      <EyeSlashFilledIcon className="pointer-events-none text-2xl text-default-400" />
                    )}
                  </button>
                }
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                className="mt-5 bg-sky-400 font-medium text-white"
                type="submit"
              >
                Register
              </Button>
              <h3 className="text-center">
                Already have an account?{" "}
                <Link
                  href={"/login"}
                  className="font-medium text-sky-400 hover:text-sky-300"
                >
                  Login
                </Link>
              </h3>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
