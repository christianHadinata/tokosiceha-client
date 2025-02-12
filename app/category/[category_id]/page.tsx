"use client";
import ProductCard from "@/components/ProductCard";
import { ProductTypes } from "@/types/Product";
import { CategoryTypes } from "@/types/Category";
import { AxiosInstance } from "@/utils/axiosInstance";
import { formatCurrency } from "@/utils/formatCurrency";
import React, { useEffect, useState } from "react";
import { CategoryImageTypes } from "@/types/CategoryImage";
import CarouselCategory from "@/components/CarouselCategory";

export default function page({ params }: { params: CategoryTypes }) {
  const { category_id } = params;

  const [categoryData, setCategoryData] = useState<CategoryTypes>();

  const [products, setProducts] = useState<ProductTypes[]>([]);

  useEffect(() => {
    const fetchCategoryData = async () => {
      const { data } = await AxiosInstance.get<CategoryTypes>(
        `http://localhost:5000/api/v1/products/categories/${category_id}`,
      );
      console.log(data);
      setCategoryData(data);
    };

    const fetchProducts = async () => {
      const { data } = await AxiosInstance.get<ProductTypes[]>(
        `http://localhost:5000/api/v1/products/category/${category_id}`,
      );
      console.log(data);
      setProducts(data);
    };

    fetchCategoryData();
    fetchProducts();
  }, [products]);

  return (
    <div className="mt-2 flex flex-col items-center">
      <CarouselCategory category_id={category_id} />
      <div className="flex w-full max-w-[1200px] flex-col py-10">
        <h2 className="text-xl font-medium capitalize">
          Result for Category{" "}
          <span className="font-semibold text-sky-400">
            "{categoryData?.category_name}"
          </span>
        </h2>
        <div className="mt-5 flex flex-wrap gap-4">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              {...product}
              formatted_product_price={formatCurrency(product.product_price)}
            />
          ))}

          {/* Under this just dummy because for now just have a few products*/}
          {/* The purpose is to show the layout of many products*/}
          {products.map((product, index) => (
            <ProductCard
              key={index}
              {...product}
              formatted_product_price={formatCurrency(product.product_price)}
            />
          ))}
          {products.map((product, index) => (
            <ProductCard
              key={index}
              {...product}
              formatted_product_price={formatCurrency(product.product_price)}
            />
          ))}
          {products.map((product, index) => (
            <ProductCard
              key={index}
              {...product}
              formatted_product_price={formatCurrency(product.product_price)}
            />
          ))}
          {products.map((product, index) => (
            <ProductCard
              key={index}
              {...product}
              formatted_product_price={formatCurrency(product.product_price)}
            />
          ))}
          {products.map((product, index) => (
            <ProductCard
              key={index}
              {...product}
              formatted_product_price={formatCurrency(product.product_price)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
