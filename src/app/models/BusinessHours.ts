import mongoose, { Schema } from "mongoose";

const BusinessHoursSchema = new Schema({
  day: { type: String, required: true },
  open: String,
  close: String,
  isClosed: Boolean,
});

export default mongoose.models.BusinessHours ||
  mongoose.model("BusinessHours", BusinessHoursSchema);
