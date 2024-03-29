import { Schema, model } from "mongoose";

const userSchema = new Schema({
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  username: {
    type: String,
    required: true,
  },
});

const User = model("User", userSchema, "users");

export default User;
