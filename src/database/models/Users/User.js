const { Schema } = require("mongoose");

const userSchema = new Schema({
  email: {
    required: true,
  },
  password: {
    required: true,
    minLength: 6,
  },
  username: {
    required: true,
  },
});

const User = model("User", userSchema, "users");

export default User;
