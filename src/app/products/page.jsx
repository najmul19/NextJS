import React from "react";

const ProductPage = async () => {
  const res = await fetch("http://localhost:3000/api/items", {
    cache: "force-cache",
  });
  const data = await res.json();
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
