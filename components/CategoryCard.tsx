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
      href={`/category/${props.category_id}`}
      className="relative h-[250px] w-[186px] cursor-pointer overflow-hidden rounded-xl"
    >
      <div className="absolute inset-0 z-10 overflow-hidden">
        <img
          src={`/category/${props.category_name}-1.jpg`}
          alt="tech"
          className="h-full w-full rounded-xl object-cover transition-all hover:scale-110"
        />
      </div>

      <h3 className="absolute left-0 top-5 z-20 w-full text-center text-2xl font-semibold text-white">
        {props.category_name}
      </h3>
    </Link>
  );
}
