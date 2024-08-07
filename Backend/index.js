import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoutes from "./routes/books/Book.route.js";
import cors from "cors";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
  }
};

connectDB();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/book", bookRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
