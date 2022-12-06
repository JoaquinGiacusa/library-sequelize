import { Router } from "express";
import AutorRouter from "./autor.routes";
import bookRouter from "./book.routes";

const appRouter = Router();

appRouter.use("/book", bookRouter);
appRouter.use("/autor", AutorRouter);

export default appRouter;
