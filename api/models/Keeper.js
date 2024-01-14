import mongoose from "mongoose";
const keeper_schema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
  password: String,
  registered_at: String,
  status: String,
});

export default Keeper = mongoose.model("Keeper", keeper_schema);
