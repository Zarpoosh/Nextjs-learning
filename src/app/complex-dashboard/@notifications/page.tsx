import React from "react";
import Link from "next/link";
import Card from "@/components/Card";
function Notifications() {
  return (
    <Card>
      اعلان ها
      <Link href={"/complex-dashboard/archived"}>اعلان های آرشیو شده </Link>
    </Card>
  );
}

export default Notifications;
