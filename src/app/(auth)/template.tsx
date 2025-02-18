"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import "./(layout-auth)/layout";
import { useState } from "react";

const navLinks = [
  { name: "ثبت نام  ", href: "/register" },
  { name: "ورود", href: "/login" },
  { name: "فراموشی پسورد", href: "/forget-password" },
];
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // مقدار پس نیم دقیقا همون مقدار  url هست که تو قارار میگیره
  const Pathname = usePathname();
  const [input, setInput] = useState("");
  return (
    <div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </div>
      {navLinks.map((link) => {
        const isActive = Pathname.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.name}
            className={isActive ? "font-bold mr-4" : "text-blue-300 mr-4"}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
