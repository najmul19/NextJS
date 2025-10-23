import { redirect } from "next/navigation";
import React from "react";

const ProductPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/items`, {
    cache: "force-cache",
  });
  const data = await res.json();
//   if(data.length>3){
//     redirect("/")
//   }
  return (
    <div>
      {/* <p>{JSON.stringify(data)}</p> */}
      <ul className="text-center mt-8 mb-5">
        {data?.map((singleProduct) => {
          return <li key={singleProduct?._id}>{singleProduct?.productName}</li>;
        })}
      </ul>
    </div>
  );
};

export default ProductPage;
