"use client";
import ProductCard from "@/components/ProductCard";
import { ProductTypes } from "@/types/Product";
import { AxiosInstance } from "@/utils/axiosInstance";
import { formatCurrency } from "@/utils/formatCurrency";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function page() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("q");

  const [products, setProducts] = useState<ProductTypes[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await AxiosInstance.get<ProductTypes[]>(
        `http://localhost:5000/api/v1/products/search`,
        {
          params: {
            keyword,
          },
        },
      );
      console.log(data);
      setProducts(data);
    };

    fetchProducts();
  }, [products]);

  return (
    <div className="flex flex-col items-center">
      <div className="flex w-full max-w-[1200px] flex-col py-10">
        <h2 className="text-xl font-medium capitalize">
          Result for keyword{" "}
          <span className="font-semibold text-sky-400">"{keyword}"</span>
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
