import { Router } from "express";
import autor from "../controllers/author.controller";

const AutorRouter = Router();

AutorRouter.get("/", autor.getAllAuthors);
AutorRouter.get("/byAutor", autor.getAuthorBooks);
AutorRouter.get("/booksByAutorName", autor.getBooksByAuthorName);
AutorRouter.post("/", autor.createAuthor);

export default AutorRouter;
