import User, { UserCreationAttributes } from "../models/user.model";
import { RequestHandler } from "express";

const createUser: RequestHandler = async (req, res) => {
  const { firstName, lastName, age } = req.body as UserCreationAttributes;

  const user = await User.create({ firstName, lastName, age });
  try {
    if (!user) {
      return res.json({ message: "error al crear usuario" });
    }
    return res.json({ message: "usuario creado exitosamente", user });
  } catch (error) {
    return res.json({ error });
  }
};

export default { createUser };
