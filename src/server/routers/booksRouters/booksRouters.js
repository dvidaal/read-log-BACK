import { Router } from "express";
import {
  createBook,
  getBooks,
  deleteBook,
  editBook
} from "../../controllers/booksControllers/booksControllers.js";

export const booksRouters = Router();

booksRouters.get("/", getBooks);
booksRouters.post("/", createBook);
booksRouters.delete("/:id", deleteBook);
booksRouters.put("/:id", editBook)

export default booksRouters;
