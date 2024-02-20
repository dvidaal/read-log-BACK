import { Router } from "express";
import { getBooks } from "../../controllers/booksControllers/booksControllers.js";

export const booksRouters = Router();

booksRouters.get("/", getBooks);

export default booksRouters;
