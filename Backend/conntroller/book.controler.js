import bookModel from "../models/books/book.model.js";

const createBooks = async (req, res) => {
  const { title, price, name, category, image } = await req.body;
  console.log("Request Body:", req.body);

  const book = new bookModel({
    title,
    price,
    name,
    category,
    image,
  });

  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getBooks = async (req, res) => {
  try {
    const books = await bookModel.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export { createBooks, getBooks };
