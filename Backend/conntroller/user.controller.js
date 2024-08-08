import User from "../models/user/User.model.js";
import bcrypt from "bcrypt";
const sigInUser = async (req, res) => {
  try {
    // body pass data
    const { userName, email, password } = req.body;
    // check user exists
    const user = await User.findOne({ email: email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    // create new user
    const newUser = await User.create({
      userName,
      email,
      password: hashedPassword,
    });
    newUser.save();
    return res.status(200).json({ message: "User created successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

export default sigInUser;

// model create
// validation
// api create
// route
