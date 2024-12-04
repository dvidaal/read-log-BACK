import Book from "../../../database/models/Books/Book.js";

export const getBooks = async (req, res) => {
  const book = await Book.find().exec();

  res.status(200).json({ book });
};

export const createBook = async (req, res) => {
  const book = req.body;
  try {
    const newBook = await Book.create({ ...book });
    res.status(201).json({ ...newBook.toJSON() });
  } catch (error) {
    console.error("Error creating book:", error.message);
    res.status(500).json({ message: "Error creating book" });
  }
};

export const deleteBook = async (req, res) => {
  const { id } = req.params; 

  try {
    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json({ message: "Libro no encontrado" });
    }

    res.status(200).json({ message: "Libro eliminado correctamente", deletedBook });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el libro", error });
  }
};