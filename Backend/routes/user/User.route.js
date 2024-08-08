import express from "express";
import UserCreate from "../../validation/User.validation.js";
import sigInUser from "../../conntroller/user.controller.js";
import validation from "../../middleware/user.middleware.js";

const router = express.Router();
router.post("/signup", validation(UserCreate), sigInUser);
export default router;
