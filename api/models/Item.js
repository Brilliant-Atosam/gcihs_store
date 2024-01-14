import mongoose from "mongoose";
const item_schema = new mongoose.Schema({
  id: String,
  name: String,
  quantity: Number,
  quantity_remaining: Number,
  added_at: String,
  last_restocked_at: String,
  restock_history: [],
});
export default Item = mongoose.model("Item", item_schema);
