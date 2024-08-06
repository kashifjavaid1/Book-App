import express from "express";
import { getBooks, createBooks } from "../../conntroller/book.controler.js";
const router = express.Router();
router.get("/", getBooks);
router.post("/", createBooks);
export default router;
