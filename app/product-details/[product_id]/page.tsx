"use client";

import React, { useEffect, useState } from "react";
import { AxiosInstance } from "@/utils/axiosInstance";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/breadcrumbs";
import { AdditionalImageTypes } from "@/types/AdditionalImage";
import { formatCurrency } from "@/utils/formatCurrency";
import { Button } from "@heroui/react";

type ProductTypes = {
  product_id: number;
  product_name: string;
  product_price: number;
  product_stock: number;
  product_details: string;
  product_featured_image_url: string;
  category_id: number;
  category_name: string;
  formatted_product_price: string;
};

export default function page({ params }: { params: ProductTypes }) {
  const { product_id } = params;
  const [product, setProduct] = useState<ProductTypes>();
  const [activeImage, setActiveImage] = useState<string>("");
  const [additionalImages, setAdditionalImages] = useState<
    AdditionalImageTypes[]
  >([]);
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);

  useEffect(() => {
    const fetchProductData = async () => {
      const { data } = await AxiosInstance.get<ProductTypes>(
        `http://localhost:5000/api/v1/products/${product_id}`,
      );

      data.formatted_product_price = formatCurrency(data.product_price);

      setProduct(data);
      setActiveImage(
        `http://localhost:5000/${product?.product_featured_image_url}`,
      );
    };

    const fetchAdditionalImages = async () => {
      const { data } = await AxiosInstance.get<AdditionalImageTypes[]>(
        `http://localhost:5000/api/v1/products/${product_id}/images`,
      );
      console.log(data);
      setAdditionalImages(data);
    };

    fetchProductData();
    fetchAdditionalImages();
  }, []);

  useEffect(() => {
    if (product?.product_featured_image_url) {
      setActiveImage(
        `http://localhost:5000/${product.product_featured_image_url}`,
      );
    }
  }, [product]);

  return (
    <div className="mt-5 flex w-screen flex-col items-center">
      <div className="w-3/4">
        <Breadcrumbs
          itemClasses={{
            separator: "text-gray-400",
          }}
        >
          <BreadcrumbItem className="text-sky-400" href={`/`}>
            Home
          </BreadcrumbItem>
          <BreadcrumbItem
            className="text-sky-400"
            href={`/category/${product?.category_id}`}
          >
            {product?.category_name}
          </BreadcrumbItem>
          <BreadcrumbItem className="min-w-0 truncate">
            <p className="max-w-64 truncate">{product?.product_name}</p>
          </BreadcrumbItem>
        </Breadcrumbs>
      </div>
      <div className="mt-5 flex w-3/4 justify-between">
        <div className="flex w-2/5 flex-col">
          {/* featured image */}
          <img
            src={activeImage}
            alt="product image"
            className="h-[576px] w-full rounded-xl object-cover"
          />
          <div className="mt-5 flex gap-x-5">
            {/* mini image */}
            <img
              src={`http://localhost:5000/${product?.product_featured_image_url}`}
              alt="product image"
              className={`h-[129px] w-1/4 cursor-pointer rounded-xl object-cover ${activeImage === `http://localhost:5000/${product?.product_featured_image_url}` ? "border-4 border-sky-400" : "border-none"}`}
              onClick={() =>
                setActiveImage(
                  `http://localhost:5000/${product?.product_featured_image_url}`,
                )
              }
            />
            {additionalImages.map((additionalImage) => (
              <img
                src={`http://localhost:5000/${additionalImage.product_image_url}`}
                alt="product image"
                className={`h-[129px] w-1/4 cursor-pointer rounded-xl object-cover ${activeImage === `http://localhost:5000/${additionalImage.product_image_url}` ? "border-4 border-sky-400" : "border-none"}`}
                onClick={() =>
                  setActiveImage(
                    `http://localhost:5000/${additionalImage.product_image_url}`,
                  )
                }
              />
            ))}
          </div>
        </div>
        <div className="flex w-1/2 flex-col px-5">
          <h2 className="text-3xl font-semibold">{product?.product_name}</h2>
          <h4 className="mt-5">{product?.product_details}</h4>
          <div className="mt-4 flex items-center">
            <img src="/icon/star.png" alt="" className="h-4 w-4" />
            <div className="flex items-center">
              <span className="ml-1">4.9</span>
              <span className="ml-1">{"(17 rating)"}</span>
            </div>
          </div>
          <h1 className="mt-5 text-4xl font-bold text-sky-400">
            {"Rp "} {product?.formatted_product_price}
          </h1>
          <div className="mt-10 flex items-center gap-x-4">
            <span className="select-none">
              <div className="flex w-52 items-center justify-center rounded-full border-1 border-gray-200 py-2 shadow-md shadow-gray-200">
                {/* I make this notes, to prevent any confuse of structure in the future */}
                {/* this span is just a wrapper to combine cursor-not-allowed and pointer-events-none, because it can't go together in a same tag */}
                <span
                  className={`${
                    selectedQuantity === 1 ? "cursor-not-allowed" : ""
                  }`}
                >
                  {/* select-none is use to prevent user to select the - or + text when double click on it */}
                  <button
                    className={`select-none rounded-md px-4 py-2 text-2xl hover:bg-gray-100 ${
                      selectedQuantity <= 1
                        ? "pointer-events-none text-gray-400"
                        : "text-sky-400"
                    }`}
                    onClick={() =>
                      setSelectedQuantity((currQuantity) => currQuantity - 1)
                    }
                  >
                    -
                  </button>
                </span>
                <input
                  type="number"
                  inputMode="numeric"
                  value={selectedQuantity}
                  className="max-w-16 py-2 text-center text-lg outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  onChange={(e) => {
                    let value = Number(e.target.value);
                    let maxStock = product?.product_stock ?? 0; // ?? is used to handle undefined or null

                    if (isNaN(value) || value < 1) {
                      value = 1;
                    } else if (value > maxStock) {
                      value = maxStock;
                    }

                    setSelectedQuantity(value);
                  }}
                />
                <span
                  className={`${
                    selectedQuantity === product?.product_stock
                      ? "cursor-not-allowed"
                      : ""
                  }`}
                >
                  <button
                    className={`select-none rounded-md px-4 py-2 text-2xl hover:bg-gray-100 ${
                      selectedQuantity >= (product?.product_stock ?? 0)
                        ? "pointer-events-none text-gray-400"
                        : "text-sky-400"
                    }`}
                    onClick={() =>
                      setSelectedQuantity((currQuantity) => currQuantity + 1)
                    }
                  >
                    +
                  </button>
                </span>
              </div>
            </span>
            <div>
              Total Stock:{" "}
              <span className="font-semibold capitalize">
                {product?.product_stock}
              </span>
            </div>
          </div>
          <div className="mt-10 flex gap-x-4">
            <Button className="w-52 bg-sky-400 py-6 text-lg font-medium capitalize text-white">
              + Add to cart
            </Button>
            <Button
              variant="bordered"
              className="w-52 border-sky-400 py-6 text-lg font-medium capitalize text-sky-400 hover:bg-sky-400 hover:text-white"
            >
              Buy now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
