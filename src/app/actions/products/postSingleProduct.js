"use server";

import { collectionNames, dbConnect } from "@/lib/dbConnect";

export const postSingleData = async (postedData) => {
  try {
    // const postedData = await req.json();
    const result = await dbConnect(collectionNames.PRODUCTS).insertOne(postedData);
    revalidatePath("/products");
    return result;
  } catch (error) {
    return null;
  }
};
