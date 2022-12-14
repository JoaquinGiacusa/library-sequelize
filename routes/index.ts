import { Router } from "express";
import autorRouter from "./author.routes";
import bookRouter from "./book.routes";
import userRouter from "./user.routes";
import rentalRouter from "./rental.routes";

const appRouter = Router();

appRouter.use("/book", bookRouter);
appRouter.use("/author", autorRouter);
appRouter.use("/user", userRouter);
appRouter.use("/rental", rentalRouter);

export default appRouter;
