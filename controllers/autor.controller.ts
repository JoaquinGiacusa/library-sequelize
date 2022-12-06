import Book from "../models/book.model";
import Autor from "../models/autor.model";
import { RequestHandler } from "express";
import { Op } from "sequelize";

const getAllAutors: RequestHandler = async (req, res) => {
  const allAutors = await Autor.findAll();
  return res.json({ allAutors });
};

const getAutorBooks: RequestHandler = async (req, res) => {
  const { autorId } = req.body;

  const autor = await Autor.findByPk(autorId);
  if (!autor) {
    return res.json({ message: "Autor no encontrado" });
  }

  const books = await Book.findAll({
    where: { autorId },
  });
  return res.json({ books });
};

const getBooksByAutorName: RequestHandler = async (req, res) => {
  const { name } = req.body;

  const book = await Book.findAll({
    include: {
      model: Autor,
      where: {
        name: {
          [Op.like]: `%${name}%`,
        },
      },
    },
  });
  //   if (!autor) {
  //     return res.json({ message: "Autor no encontrado" });
  //   }

  //   const books = await Book.findAll({
  //     where: { autorId: autor.id },
  //   });
  return res.json({ book });
};

export default { getAllAutors, getAutorBooks, getBooksByAutorName };
