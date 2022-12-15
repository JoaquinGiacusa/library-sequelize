import { Router } from "express";
import register from "../controllers/auth/register.controller";
import login from "../controllers/auth/login.controller";

const authRouter = Router();

authRouter.post("/register", register);
authRouter.post("/login", login);

export default authRouter;
