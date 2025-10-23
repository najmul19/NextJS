"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ProductAddForm = () => {
  const router = useRouter();

  //   const [productName, setProductName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    if (!productName.trim()) return;

    const payload = { productName };
    const res = await fetch("http://localhost:3000/api/items", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    console.log(result);
    form.reset();
    // alert("Prudct Added");
    // setProductName("");
    router.push("/products");
    // router.refresh();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="bg-teal-50 text-black p-2 mb-5 rounded-2xl"
          type="text"
          name="productName"
          //   value={productName}
          //   onChange={(e) => setProductName(e.target.value)}
          placeholder="Enter product name"
        />
        <button
          type="submit"
          className="cursor-pointer bg-amber-100 px-5 text-black rounded-2xl m-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductAddForm;
