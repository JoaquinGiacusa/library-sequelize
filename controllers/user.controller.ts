import User, { UserCreationAttributes } from "../models/user.model";
import { RequestHandler } from "express";
import bcrypt from "bcrypt";

const myProfile: RequestHandler = async (req, res) => {
  //@ts-ignore
  const userId = req.user.id;

  const user = await User.findByPk(userId);

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  return res.status(200).json({
    id: user.id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
  });
};

const updateUser: RequestHandler = async (req, res) => {
  try {
    const { email, firstName, lastName, password, repeatPassword } = req.body;

    //@ts-ignore
    const userId = req.user.id;

    if (password != repeatPassword) {
      return res.status(400).json({ message: "password not match" });
    }

    const saltRounds = 10;
    bcrypt.hash(password, saltRounds).then(async (hash) => {
      try {
        await User.update(
          { email, firstName, lastName, password: hash },
          { where: { id: userId } }
        );

        return res.json({ message: "Your account has been updated!" });
      } catch (error) {
        return res.status(400).json(error);
      }
    });
  } catch (error) {
    return res.json({ error });
  }
};

export default { myProfile, updateUser };
