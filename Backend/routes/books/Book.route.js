import mongoose from "mongoose";
import { getBooks, createBooks } from "../../models/conntroller/book.controler";
const router = express.Router();
router.get("/");
