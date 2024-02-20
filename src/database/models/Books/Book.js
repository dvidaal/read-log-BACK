import { Schema, model } from "mongoose";

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
});

const Book = model("Book", bookSchema, "books");

export default Book;
