import Book from "../models/book.model";
import Author, { AuthorCreationAttributes } from "../models/author.model";
import { RequestHandler } from "express";
import { Op } from "sequelize";

const getAllAuthors: RequestHandler = async (req, res) => {
  const allAutors = await Author.findAll();
  return res.json({ allAutors });
};

const getAuthorBooks: RequestHandler = async (req, res) => {
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

const createAuthor: RequestHandler = async (req, res) => {
  try {
    const authorData = req.body as AuthorCreationAttributes;

    const author = await Author.create(authorData);
    if (!author) {
      return res.json({ message: "error al crear autor" });
    }
    return res.json({ message: "autor creado exitosamente", author });
  } catch (error) {
    return res.json({ error });
  }
};

const updateAuthor: RequestHandler = async (req, res) => {};
const deleteAuthor: RequestHandler = async (req, res) => {};

const getBooksByAuthorName: RequestHandler = async (req, res) => {
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

export default {
  getAllAuthors,
  createAuthor,
  updateAuthor,
  deleteAuthor,
  getAuthorBooks,
  getBooksByAuthorName,
};
