import { Router } from "express";
import autor from "../controllers/autor.controller";

const AutorRouter = Router();

AutorRouter.get("/", autor.getAllAutors);
AutorRouter.get("/byAutor", autor.getAutorBooks);
AutorRouter.get("/booksByAutorName", autor.getBooksByAutorName);

export default AutorRouter;
