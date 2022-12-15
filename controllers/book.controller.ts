import Book, { BookCreationAttributes } from "../models/book.model";
import Author from "../models/author.model";
import { RequestHandler } from "express";
import { where } from "sequelize";

const getAllBook: RequestHandler = async (req, res) => {
  const allBooks = await Book.findAll();
  return res.json({ allBooks });
};

const createBook: RequestHandler = async (req, res) => {
  try {
    const bookData = req.body as BookCreationAttributes;

    const book = await Book.create(bookData, { include: [Author] });
    if (!book) {
      return res.json({ message: "error al crear libro" });
    }
    return res.json({ message: "libro creado exitosamente", book });
  } catch (error) {
    return res.json({ error });
  }
};

const updateBook: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const bookData = req.body as BookCreationAttributes;

    const book = await Book.findByPk(id);
    if (!book) {
      return res.json({ message: "libro no encontrado" });
    }

    book?.set(bookData);
    await book?.save();

    return res.json({ message: "libro actualizado exitosamente", book });
  } catch (error) {
    return res.json({ error });
  }
};

export default { getAllBook, createBook, updateBook };
