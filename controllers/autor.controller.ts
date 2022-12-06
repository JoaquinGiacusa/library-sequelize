import Book from "../models/book.model";
import Author from "../models/author.model";
import { RequestHandler } from "express";
import { Op } from "sequelize";

const getAllAutors: RequestHandler = async (req, res) => {
  const allAutors = await Author.findAll();
  return res.json({ allAutors });
};

const getAutorBooks: RequestHandler = async (req, res) => {
  const { autorId } = req.body;

  const autor = await Author.findByPk(autorId);
  if (!autor) {
    return res.json({ message: "Autor no encontrado" });
  }

  const books = await Book.findAll({
    where: {},
  });
  return res.json({ books });
};

const getBooksByAutorName: RequestHandler = async (req, res) => {
  const { name } = req.body;

  const book = await Book.findAll({
    include: {
      model: Author,
      where: {
        name: {
          [Op.like]: `%${name}%`,
        },
      },
    },
  });
  return res.json({ book });
};

export default { getAllAutors, getAutorBooks, getBooksByAutorName };
