import { dbConnect } from "@/lib/dbConnect";

export async function GET() {
  const data = await dbConnect("colectionName").find({}).toArray();
  return Response.json({ data });
}

export async function POST(req) {
  const postedData = await req.json();
  const result = dbConnect("colectionName").insertOne(postedData);
  return Response.json({ result });
}
