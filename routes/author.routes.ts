import { Router } from "express";
import autor from "../controllers/author.controller";

const AutorRouter = Router();

AutorRouter.get("/", autor.getAllAuthors);
AutorRouter.post("/", autor.createAuthor);
AutorRouter.put("/:id", autor.updateAuthor);
AutorRouter.delete("/:id", autor.deleteAuthor);
AutorRouter.get("/byAutor", autor.getAuthorBooks);
AutorRouter.get("/booksByAutorName", autor.getBooksByAuthorName);

export default AutorRouter;
