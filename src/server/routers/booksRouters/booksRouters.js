import { Router } from "express";
import {
  createBook,
  getBooks,
} from "../../controllers/booksControllers/booksControllers.js";

export const booksRouters = Router();

booksRouters.get("/", getBooks);
booksRouters.post("/", createBook);

export default booksRouters;
