import React from "react";
import { notFound } from "next/navigation";

function ReviweID({
  params,
}: {
  params: { reviweId: string; productId: string };
}) {


  if(parseInt(params.reviweId)>1000){
    notFound()
  }
  return (
    <div>
      <h1>
        product {params.productId} :==== ReviweID page {params.reviweId}:)))
      </h1>
    </div>
  );
}
export default ReviweID;
