import Book from "../models/book.model";
import Autor from "../models/autor.model";
import { RequestHandler } from "express";

const getAllBook: RequestHandler = async (req, res) => {
  const allBooks = await Book.findAll();
  return res.json({ allBooks });
};

const createBook: RequestHandler = async (req, res) => {
  const { title, autorId } = req.body;

  const autor = await Autor.findByPk(autorId);

  if (!autor) {
    return res.json({ message: "Autor no encontrado" });
  }

  const books = await Book.create({
    title: title,
    autorId: autorId,
  });
  return res.json({ books });
};

export default { getAllBook, createBook };
