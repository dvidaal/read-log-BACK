import Book from "../../../database/models/Books/Book.js";

export const getBooks = async (req, res) => {
  const book = await Book.find().exec();

  res.status(200).json({ book });
};
