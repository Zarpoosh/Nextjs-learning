import React from "react";
import Link from "next/link";
import Card from "@/components/Card";
function Logedin() {
  return (
    <Card>
     لطفا برای ادامه وارد شوید 
      {/* <Link href={"/complex-dashboard"}> پیش فرض</Link> */}
    </Card>
  );
}

export default Logedin;
