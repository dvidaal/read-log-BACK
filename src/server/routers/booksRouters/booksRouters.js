import { Router } from "express";
import {
  createBook,
  getBooks,
  deleteBook
} from "../../controllers/booksControllers/booksControllers.js";

export const booksRouters = Router();

booksRouters.get("/", getBooks);
booksRouters.post("/", createBook);
booksRouters.delete("/:id", deleteBook);

export default booksRouters;
