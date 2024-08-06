import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoutes from "./routes/books/Book.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
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
