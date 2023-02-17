import express from "express";
import mongoose from "mongoose";
mongoose.set("strictQuery", false);

import userRoutes from "./routes/user-routes.js";

const app = express();
const port = 8000;

app.use(express.json());

// connecting to the database
main()
  .catch((err) => console.log(err))
  .then(() => console.log("Database Connected"));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/companydb");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// Routes
app.use("/api/v1/users", userRoutes);

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
