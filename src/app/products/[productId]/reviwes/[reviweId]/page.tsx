"use client";

import React from "react";
import { notFound } from "next/navigation";
import { error } from "console";

function GrtRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}
function ReviweID({
  params,
}: {
  params: { reviweId: string; productId: string };
}) {
  if (parseInt(params.reviweId) > 1000) {
    notFound();
  }
  const random = GrtRandomInt(2);

  if (random == 1) {
    throw new Error("error loading rivew");
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
