import Rental, { RentalCreationAttributes } from "../models/rental.model";
import { RequestHandler } from "express";

const createRental: RequestHandler = async (req, res) => {
  const { bookId, userId } = req.body as RentalCreationAttributes;

  const fourteenDaysInMillis = 1209600000;
  const rentalEndDate = new Date(Date.now() + fourteenDaysInMillis);

  const rental = await Rental.create({ bookId, userId, rentalEndDate });
  try {
    if (!rental) {
      return res.json({ message: "error al crear rental" });
    }
    return res.json({ message: "rental creada exitosamente", rental });
  } catch (error) {
    return res.json({ error });
  }
};

const getAllRental: RequestHandler = async (req, res) => {
  const rentals = await Rental.findAll();
  if (rentals.length == 0) return res.json({ message: "no hay resulados" });
  return res.json(rentals);
};

export default { createRental, getAllRental };
