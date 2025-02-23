"use client";

import React from "react";

function Error({ error, reset }: { error: Error,reset:()=>void }) {
  return <div>{error.message}==>Error in rivew id  <button onClick={reset}>try again </button>:(</div>;
}

export default Error;
