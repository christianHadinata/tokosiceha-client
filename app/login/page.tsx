"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@heroui/input";
import { Button, ButtonGroup } from "@heroui/button";
import Link from "next/link";
import { EyeSlashFilledIcon } from "@/components/EyeSlashFilledIcon";
import { EyeFilledIcon } from "@/components/EyeFilledIcon";
import { AxiosInstance } from "@/utils/axiosInstance";
import Image from "next/image";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";
import { AxiosError } from "axios";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "@/contexts/AuthContext";

export default function page() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isVisible, setIsVisible] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();
  const { setUser } = useAuth();

  useEffect(() => {
    const registered = searchParams.get("registered");

    if (registered) {
      toast.success("Success! Account created.", {
        toastId: "register-success", // Unique identifier to prevent duplicates (prevent double toast)
      });

      // Remove query parameter
      router.replace("/login");
    }
  }, [searchParams, router]);

  interface UserPayload {
    user_id: string;
    user_email: string;
    user_name: string;
    user_role: string;
    user_phone: string | null;
  }

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("All field must be specified!");
    } else {
      try {
        const { data } = await AxiosInstance.post(
          `http://localhost:5000/api/v1/users/login`,
          {
            user_email: email,
            user_password: password,
          },
        );
        if (data.token) {
          localStorage.setItem("token", data.token);
          const decodedUser: UserPayload = jwtDecode(data.token);
          setUser(decodedUser);
          router.push("/");
        }
      } catch (error: any) {
        const msg = error.response?.data?.message + "!";
        toast.error(msg);
      }
    }
  };
  return (
    <div className="flex">
      <div className="flex h-screen w-1/2 flex-col items-center justify-center">
        <div className="w-1/2">
          <Link
            href={"/"}
            className="text-xl font-normal text-sky-400 hover:text-sky-300"
          >
            {"< "}Back to home
          </Link>
          <div className="mt-2 p-10 shadow-lg shadow-slate-200">
            <h1 className="pb-10 text-center text-4xl font-semibold">Login</h1>
            <form className="flex flex-col gap-y-5" onSubmit={handleSubmit}>
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
                Login
              </Button>
              <h3 className="text-center">
                Don't have an account?{" "}
                <Link
                  href={"/register"}
                  className="font-medium text-sky-400 hover:text-sky-300"
                >
                  Register
                </Link>
              </h3>
            </form>
          </div>
        </div>
      </div>
      <div className="flex h-screen w-1/2 items-center justify-center rounded-bl-full bg-sky-400">
        <div className="mb-32 ml-32 flex items-center justify-center">
          <Image
            src={"/logo-tokosiceha/white.png"}
            width={100}
            height={100}
            alt="logo"
          ></Image>
          <h1 className="cursor-default text-6xl text-white">tokosiceha</h1>
        </div>
      </div>
    </div>
  );
}
