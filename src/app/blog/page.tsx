import { Metadata } from "next";
import { title } from "process";
import React from "react";

export const metadata: Metadata = {
  title: {
    absolute: "بلاگ",
  },
};
function Blog() {
  return <h1>Blog</h1>;
}
export default Blog;
