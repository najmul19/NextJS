"use server";

import { dbConnect } from "@/lib/dbConnect";

export const postSingleData = async (postedData) => {
  try {
    // const postedData = await req.json();
    const result = await dbConnect("products").insertOne(postedData);
    revalidatePath("/products");
    return result;
  } catch (error) {
    return null;
  }
};
