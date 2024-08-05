import mongoose from "mongoose";
const booksModel = new mongoose.Schema({
  title: String,
  price: String,
  name: String,
  category: String,
  image: String,
});

export default mongoose.model("Books", booksModel);
