import connectToDB from "../../lib/db";
import BusinessHours from "../../models/BusinessHours";
import { NextRequest, NextResponse } from "next/server";

// GET all business hours
export async function GET() {
  await connectToDB();
  const hours = await BusinessHours.find(); // ✅ OK
  return NextResponse.json(hours);
}

// POST new business hour entry
export async function POST(req: NextRequest) {
  await connectToDB();
  const data = await req.json();
  const newHour = await BusinessHours.create(data); // ✅ OK
  return NextResponse.json(newHour, { status: 201 });
}
