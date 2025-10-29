"use server";

import { collectionNames, dbConnect } from "@/lib/dbConnect";

export const registerUser = async (payload) => {
  try {
    const result = await dbConnect(collectionNames.TEEST_USER).insertOne(payload);
    return result;
  } catch (error) {
    return null;
  }
};
