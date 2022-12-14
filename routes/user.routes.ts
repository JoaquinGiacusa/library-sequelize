import { Router } from "express";
import user from "../controllers/user.controller";

const userRouter = Router();

// userRouter.get("/", user.getAlluser);
userRouter.post("/", user.createUser);

export default userRouter;
