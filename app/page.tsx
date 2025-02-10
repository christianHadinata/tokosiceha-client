"use client";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import CategoryCard from "@/components/CategoryCard";
import { AxiosInstance } from "@/utils/axiosInstance";
import { CategoryTypes } from "@/types/Category";
import { useEffect, useState } from "react";

export default function Home() {
  const [categories, setCategories] = useState<CategoryTypes[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await AxiosInstance.get<CategoryTypes[]>(
        `http://localhost:5000/api/v1/products/categories`,
      );

      console.log(data);
      setCategories(data);
    };

    fetchCategories();
  }, []);
  return (
    <div className="mt-2 flex flex-col items-center">
      {/* Carousel */}
      <Carousel />
      {/* Categories */}
      <div className="flex w-full max-w-[1200px] flex-col py-14">
        <h2 className="text-2xl font-bold capitalize">
          Shop our top categories
        </h2>
        <div className="mt-5 flex flex-wrap gap-4">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </div>
  );
}
