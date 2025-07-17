import { NextResponse } from "next/server";
import connectToDB from "@/app/lib/db";
import MenuItem from "@/app/models/MenuItem";

export async function GET() {
  await connectToDB();
  const items = await MenuItem.find({});
  return NextResponse.json(items);
}

export async function POST(req: Request) {
  await connectToDB();
  const data = await req.json();
  const item = await MenuItem.create(data);
  return NextResponse.json(item);
}
