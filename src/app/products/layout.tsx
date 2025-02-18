// app/layout.js or app/layout.tsx
export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children} <h1>محصولات ویژه</h1>
    </>
  );
}
