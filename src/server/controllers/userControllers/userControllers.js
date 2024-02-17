import bcrypt from "bcryptjs";
import User from "../../../database/models/Users/User.js";

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      console.log("User not found");
    }

    if (!(await bcrypt.compare(password, user.password))) {
      console.log("Wrong password");
    }
  } catch (error) {
    console.log(error, "ka pasao");
  }
};
