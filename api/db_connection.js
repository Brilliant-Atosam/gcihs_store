import mongoose from "mongoose";
export default mongoose
  .connect(process.env.mongodb_uri)
  .then(console.log("Database connected successfully."))
  .catch((err) => console.log(err.message));
