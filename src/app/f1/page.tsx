import React from "react";
import Link from "next/link";

function Folder1() {
  return (
    <>
      <div>Folder1</div>
      <div>
        <Link href={"/f1/f2"}>folder2</Link>
      </div>
    </>
  );
}

export default Folder1;
