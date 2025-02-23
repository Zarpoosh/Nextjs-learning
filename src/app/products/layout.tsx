// app/layout.js or app/layout.tsx
function GrtRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const random = GrtRandomInt(2);
  // if (random == 1) {
  //   throw new Error("error loading product");
  // }
  return (
    <>
      {children} <h1>محصولات ویژه</h1>
    </>
  );
}
