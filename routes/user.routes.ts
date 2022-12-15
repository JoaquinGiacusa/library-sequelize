import { Router } from "express";
import user from "../controllers/user.controller";
import authMiddleware from "../middleware/auth";

const userRouter = Router();

// userRouter.get("/", user.getAlluser);
userRouter.get("/me", authMiddleware, user.myProfile);
userRouter.post("/me", authMiddleware, user.updateUser);

export default userRouter;
