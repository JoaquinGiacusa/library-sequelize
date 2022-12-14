import { Router } from "express";
import rental from "../controllers/rental.controller";

const rentalRouter = Router();

rentalRouter.get("/", rental.getAllRental);
rentalRouter.post("/", rental.createRental);

export default rentalRouter;
