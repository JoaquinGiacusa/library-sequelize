import { RequestHandler } from "express";
import bcrypt from "bcrypt";
import User from "../../models/user.model";

type Body = {
  email: string;
  password: string;
  repeatPassword: string;
  firstName: string;
  lastName: string;
};

const saltRounds = 10;

const register: RequestHandler = async (req, res) => {
  try {
    const body = req.body as Body;

    if (body.password !== body.repeatPassword) {
      return res.status(400).json({ message: "Password not match" });
    }

    bcrypt.hash(body.password, saltRounds).then(async (hash) => {
      try {
        await User.create({
          email: body.email,
          firstName: body.firstName,
          lastName: body.lastName,
          password: hash,
        });

        return res.status(201).json({ message: "User has been created!" });
      } catch (error) {
        return res.status(400).json(error);
      }
    });
  } catch (error) {
    return res.status(400).json(error);
  }
};

export default register;
