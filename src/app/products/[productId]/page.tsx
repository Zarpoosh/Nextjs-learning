import React from "react";
import { Metadata } from "next";

// Dynamic metadata generation
export async function generateMetadata({
  params,
}: {
  params: { productId: string };
}): Promise<Metadata> {
  return {
    title: `محصول ${params.productId}`,
  };
}

// ProductDetails component
function ProducDetails({ params }: { params: { productId: string } }) {
  return (
    <div>
      <h1>ProducDetails page {params.productId} :)))</h1>
    </div>
  );
}

export default ProducDetails;