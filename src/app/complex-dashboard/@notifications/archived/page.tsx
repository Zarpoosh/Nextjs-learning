import React from "react";
import Link from "next/link";
import Card from "@/components/Card";
function ArchivedNotifications() {
  return (
    <Card>
      اعلان های آرشیو شده
      <Link href={"/complex-dashboard"}> پیش فرض</Link>
    </Card>
  );
}

export default ArchivedNotifications;
