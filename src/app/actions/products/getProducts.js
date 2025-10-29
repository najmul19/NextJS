"use server";

import { collectionNames, dbConnect } from "@/lib/dbConnect";

export const getProducts = async () => {
  try {
    const data = await dbConnect(collectionNames.PRODUCTS).find({}).toArray();
    return data;
  } catch (error) {
    return [];
  }
};
