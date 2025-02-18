import React from "react";
function Doxs({ params }: { params: { slug: string[] } }) {
  if (params.slug?.length === 2) {
    return (
      <h2>
        داکیومنت برای ویژگی {params.slug[0]} برای مفهوم {params.slug[1]}
      </h2>
    );
  } else if (params.slug?.length === 1) {
    return <h2>داکیومنت برای ویژگی {params.slug[0]}</h2>;
  }

  return (
    <div>
      <h1>صفحه اصلی داکیومنت</h1>
    </div>
  );
}
export default Doxs;
