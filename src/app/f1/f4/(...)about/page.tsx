import Link from "next/link";
import React from "react"

function InterceptedAbout () {
  return (
    <div>
      <h1>(...)interceptedAbout</h1>
      <div>
        <Link href={"/f1/f3"}>f3</Link>
        <Link href={"/about"}>about</Link>
      </div>
    </div>
  )
};

export default InterceptedAbout;