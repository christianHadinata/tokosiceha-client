"use client";

import { CartUserTypes } from "@/types/CartUser";
import { AxiosInstance } from "@/utils/axiosInstance";
import React, { useEffect, useState } from "react";

export default function page() {
  const [cartData, setCartData] = useState<CartUserTypes[]>([]);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const { data } = await AxiosInstance.get<CartUserTypes[]>(
          `http://localhost:5000/api/v1/cart/2`,
        );

        console.log(data);
        setCartData(data);
      } catch (error) {
        console.log(error);
        setCartData([]);

        // dummy data for testing page when cart data is available
        // setCartData([
        //   {
        //     cart_item_id: 1,
        //     product_id: 101,
        //     user_id: 2,
        //     product_quantity: 3,
        //   },
        //   {
        //     cart_item_id: 2,
        //     product_id: 102,
        //     user_id: 2,
        //     product_quantity: 1,
        //   },
        // ]);
      }
    };

    fetchCartData();
  }, []);

  return cartData.length === 0 ? (
    <div className="flex h-screen flex-col items-center justify-center">
      <img src="/icon/empty-cart.png" alt="Empty cart" />
      <div className="flex w-1/4 flex-col text-center">
        <h1 className="mt-3 text-xl font-medium">Your cart is empty</h1>
        <h2 className="mt-3 text-gray-500">
          Looks like you have not added anything to your cart. Go ahead &
          explore our products.
        </h2>
      </div>
    </div>
  ) : (
    <div>Test</div>
  );
}
