"use client";
import React, { useState } from "react";
import { Input } from "@heroui/input";
import { Button, ButtonGroup } from "@heroui/button";
import Link from "next/link";
import { EyeSlashFilledIcon } from "@/components/EyeSlashFilledIcon";
import { EyeFilledIcon } from "@/components/EyeFilledIcon";
import Image from "next/image";

export default function page() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
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
          <h1 className="text-6xl text-white">tokosiceha</h1>
        </div>
      </div>
      <div className="flex h-screen w-1/2 flex-col items-center justify-center">
        <h1 className="pb-10 text-5xl font-semibold">Register</h1>
        <form className="flex w-2/5 flex-col gap-y-5">
          <Input
            label="Username"
            type="text"
            variant="underlined"
            size="lg"
            isClearable
          />
          <Input
            label="Email"
            type="email"
            variant="underlined"
            size="lg"
            isClearable
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
          />
          <Button className="mt-5 bg-sky-400 font-medium text-white">
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
  );
}
