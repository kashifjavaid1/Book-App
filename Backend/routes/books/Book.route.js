import express from "express";
import { getBooks, createBooks } from "../../conntroller/book.controler.js";
import validation from "../../middleware/Book.middleware.js";
import createBooksScheme from "../../validation/Book.validation.js";
const router = express.Router();
router.get("/", getBooks);
router.post("/", validation(createBooksScheme), createBooks);
export default router;
