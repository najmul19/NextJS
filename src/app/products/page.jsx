import { dbConnect } from "@/lib/dbConnect";
import { redirect } from "next/navigation";
import React from "react";
import { getProducts } from "../actions/products/getProducts";
// export const dynamic = "force-dynamic";
const ProductPage = async () => {
    // const { NEXT_PUBLIC_BASE_URL } = process.env;
    // const res = await fetch(`${NEXT_PUBLIC_BASE_URL}/api/items`, {
    //   cache: "force-cache",
    // });
    // const data = await res.json();
    // const data = await dbConnect("products").find({}).toArray();
  //   if(data.length>3){
  //     redirect("/")
  //   }

  const data = await getProducts();
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
