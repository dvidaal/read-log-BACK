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
    } else {
      console.log("Wrong password");
      return res.status(401).json({ message: "Wrong password" });
    }

    console.log("Login successful");

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.log(error, "ka pasao");
    res.status(500).json({ message: "Internal server error" });
  }
};
