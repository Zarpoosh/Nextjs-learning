import React from "react";
// import UserAnalitic from "@/components/UserAnalitic";
// import RevenueMetrics from "@/components/RevenueMetrics";
// import Notifications from "@/components/Notifications";

export default function DashboardLayout({
  children,
  notifications,
  revenue,
  users,
  login
}: {
  children: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
  users: React.ReactNode;
  login: React.ReactNode;

}) {
  const isLogin=false;
  return isLogin ?(
    <>
      <div>{children}</div>
      {/* <UserAnalitic />
      <RevenueMetrics />
      <Notifications /> */}

      {/* --------------------------------------- */}

      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>
    </>
  ):(login);
}
