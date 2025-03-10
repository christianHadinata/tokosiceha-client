"use client";

import React from "react";

export default function page() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <img src="/icon/empty-cart.png" alt="" />
      <div className="flex w-1/4 flex-col text-center">
        <h1 className="mt-3 text-xl font-medium">Your cart is empty</h1>
        <h2 className="mt-3 text-gray-500">
          Looks like you have not added anything to your cart. Go ahead &
          explore our products.
        </h2>
      </div>
    </div>
  );
}
