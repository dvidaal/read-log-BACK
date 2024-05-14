import jwt from "jsonwebtoken";
import User from "../../../database/models/Users/User.js";

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      console.log("User not found");
      return res.status(404).json({ message: "User not found" });
    }

    if (password === user.password) {
      console.log("De locos pa'lante");

      const token = jwt.sign(
        { userId: user._id, username: user.username },
        "testingHowItWOrks123!",
        { expiresIn: "1h" }
      );

      console.log("TOKENSITO ", token);

      return res.status(200).json({ message: "Login succesful", token });
    } else {
      console.log("Wrong password");
      return res.status(401).json({ message: "Wrong password" });
    }
  } catch (error) {
    console.log(error, "ka pasao");
    res.status(500).json({ message: "Internal server error" });
  }
};
