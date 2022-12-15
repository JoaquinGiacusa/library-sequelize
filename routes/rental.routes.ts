import { Router } from "express";
import rental from "../controllers/rental.controller";
import authMiddleware from "../middleware/auth";

const rentalRouter = Router();

rentalRouter.get("/", rental.getAllRental);
rentalRouter.post("/", authMiddleware, rental.createRental);

export default rentalRouter;
