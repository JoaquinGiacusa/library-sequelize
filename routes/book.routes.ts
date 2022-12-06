import { Router } from "express";
import book from "../controllers/book.controller";

const bookRouter = Router();

bookRouter.get("/", book.getAllBook);
bookRouter.post("/", book.createBook);

export default bookRouter;
