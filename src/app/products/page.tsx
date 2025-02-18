import React from "react";
import Link from "next/link";
function ProductList() {
  const productId = 100;
  return (
    <div>
      <h1>ProductList page :)))</h1>
      <h2>
        {" "}
        <Link href={"/products/1"}>محصول۱</Link>
      </h2>
      <h2>
        <Link href={"/products/2"}>محصول ۲</Link>
      </h2>
      <h2>
        <Link href={`/products/${100}`}>محصول{productId}</Link>
      </h2>
      <h2>
        <Link href={"/products/3"} replace>محصول۳</Link>
      </h2>
      <Link href={"/"}>back home</Link>
    </div>
  );
}
export default ProductList;
