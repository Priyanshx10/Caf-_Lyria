import mongoose, { Schema } from "mongoose";

const ReviewSchema = new Schema({
  name: String,
  message: String,
  rating: Number,
  date: { type: Date, default: Date.now },
  verified: { type: Boolean, default: false },
});

export default mongoose.models.Review || mongoose.model("Review", ReviewSchema);
