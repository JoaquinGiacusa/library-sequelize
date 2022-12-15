import { Router } from "express";
import autorRouter from "./author.routes";
import bookRouter from "./book.routes";
import userRouter from "./user.routes";
import rentalRouter from "./rental.routes";
import authRouter from "./auth.routes";

const appRouter = Router();

appRouter.use("/book", bookRouter);
appRouter.use("/author", autorRouter);
appRouter.use("/user", userRouter);
appRouter.use("/rental", rentalRouter);
appRouter.use("/auth", authRouter);

export default appRouter;
