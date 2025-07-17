import mongoose, { Schema } from "mongoose";

const MenuItemSchema = new Schema({
  name: String,
  description: String,
  category: String,
  price: Number,
  dietary: [String],
});

export default mongoose.models.MenuItem ||
  mongoose.model("MenuItem", MenuItemSchema);
