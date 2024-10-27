import { Schema, model } from "mongoose";

const bookSchema = new Schema({
  Título: {
    type: String,
    required: true,
  },
  Autora: {
    type: String,
    required: true,
  },
  Año: {
    type: Number,
    required: true,
  },
  Tipo: {
    type: String,
  },
  Puntuación: {
    type: String,
    required: true,
  },
  Nº: {
    type: Number,
  },
});

const Book = model("Book", bookSchema, "books");

export default Book;
