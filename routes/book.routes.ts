import { Router } from "express";
import book from "../controllers/book.controller";
import authMiddleware from "../middleware/auth";

const bookRouter = Router();

bookRouter.get("/", book.getAllBook);
bookRouter.post("/", authMiddleware, book.createBook);
bookRouter.post("/:id", authMiddleware, book.updateBook);

export default bookRouter;
