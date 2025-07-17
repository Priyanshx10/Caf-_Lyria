// scripts/seed-db.ts
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" }); // ✅ Load .env.local manually

import mongoose from "mongoose";
import BusinessHours from "@/app/models/BusinessHours"; // Update with correct path
import path from "path";

async function seed() {
  if (!process.env.MONGODB_URI) {
    throw new Error("❌ MONGODB_URI is missing in .env.local");
  }

  await mongoose.connect(process.env.MONGODB_URI, {
    dbName: "cafe-lyria",
  });

  console.log("✅ MongoDB connected");

  const hours = [
    { day: "Monday", open: "09:00", close: "21:00" },
    { day: "Tuesday", open: "09:00", close: "21:00" },
    { day: "Wednesday", open: "09:00", close: "21:00" },
    { day: "Thursday", open: "09:00", close: "21:00" },
    { day: "Friday", open: "09:00", close: "23:00" },
    { day: "Saturday", open: "10:00", close: "23:00" },
    { day: "Sunday", open: "10:00", close: "20:00" },
  ];

  await BusinessHours.deleteMany();
  await BusinessHours.insertMany(hours);

  console.log("✅ Seeded business hours!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("❌ Seeding failed:", err);
  process.exit(1);
});
