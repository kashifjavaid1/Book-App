import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Path `title` is required."],
  },
  price: {
    type: Number,
    required: [true, "Path `price` is required."],
  },
  name: {
    type: String,
    required: [true, "Path `name` is required."],
  },
  category: {
    type: String,
    required: [true, "Path `category` is required."],
  },
  image: {
    type: String,
    required: [true, "Path `image` is required."],
  },
});

const bookModel = mongoose.model("Book", bookSchema);

export default bookModel;
