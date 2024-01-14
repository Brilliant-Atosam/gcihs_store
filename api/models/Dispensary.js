import mongoose from "mongoose";
const dispensary_schema = new mongoose.Schema({
  id: String,
  item_name: String,
  item_quantity: Number,
  recipient_name: String,
  recipient_id: String,
  dispensed_at: String,
  clerk_name: String,
  clerk_id: String,
});
export default Dispensary = mongoose.model("Dispensary", dispensary_schema);
