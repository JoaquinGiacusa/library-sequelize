import Book, { BookCreationAttributes } from "../models/book.model";
import Author from "../models/author.model";
import { RequestHandler } from "express";

const getAllBook: RequestHandler = async (req, res) => {
  const allBooks = await Book.findAll();
  return res.json({ allBooks });
};

const createBook: RequestHandler = async (req, res) => {
  const props = req.body as BookCreationAttributes;

  const book = await Book.create(props, { include: [Author] });
  // const book = await Book.create({ title });
  return res.json(book);
  // const autor = await Autor.findByPk(autorId);

  // if (!autor) {
  //   return res.json({ message: "Autor no encontrado" });
  // }

  // const books = await Book.create({
  //   title: title,
  //   autorId: autorId,
  // });
  // return res.json({ books });
};

export default { getAllBook, createBook };
