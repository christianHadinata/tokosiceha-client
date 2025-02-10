import Image from "next/image";
import Link from "next/link";
import React from "react";

type CategoryTypes = {
  category_id: number;
  category_name: string;
};

export default function CategoryCard(props: CategoryTypes) {
  return (
    <Link
      href={"/"}
      className="group relative h-[250px] w-[186px] cursor-pointer rounded-xl transition-all hover:scale-105"
    >
      <img
        src={`/category/${props.category_name}-1.jpg`}
        alt="tech"
        className="absolute h-full w-full rounded-xl object-cover"
      />
      <h3 className="absolute h-full w-full py-5 text-center text-2xl font-semibold text-white">
        {props.category_name}
      </h3>
    </Link>
  );
}
