"use client";
import React from "react";
import { useRouter } from "next/navigation";
function OrderProducts() {
  const router = useRouter();
  const handleClick = () => {
    console.log("clicked :))");
    // router.push("/");
    // router.forward()
    router.back();
  };
  return (
    <div>
      <h1>ثبت سفارش</h1>
      <button onClick={handleClick}>ثبت سفارش</button>
    </div>
  );
}

export default OrderProducts;
