import Image from "next/image";
import Link from "next/link";
import React from "react";

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

export default function ProductCard(props: ProductTypes) {
  return (
    <Link
      href={`/product-details/${props.product_id}`}
      className="flex h-[350px] w-[186px] cursor-pointer flex-col rounded-xl shadow-md shadow-gray-200 transition-all hover:scale-105"
    >
      <img
        src={`http://localhost:5000/${props.product_featured_image_url}`}
        alt=""
        className="h-3/5 w-full rounded-t-xl object-cover"
      />
      <div className="flex h-2/5 w-full flex-col rounded-b-xl p-3 capitalize">
        {/* <h4 className="line-clamp-2 text-sm font-medium">
          {"White t shirt make for everything good because of material"}
        </h4> */}
        <h4 className="line-clamp-2 text-sm font-medium">
          {props.product_name}
        </h4>
        <h3 className="mt-2 text-base font-semibold text-sky-400">
          {"Rp "}
          {props.formatted_product_price}
        </h3>
        <div className="mt-4 flex h-4 items-center text-xs">
          <img src="/icon/star.png" alt="" className="h-3 w-3" />
          <div className="flex items-center">
            <span className="ml-1">4.9</span>
            <span className="ml-1">|</span>
            <span className="ml-1">17 sold</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
