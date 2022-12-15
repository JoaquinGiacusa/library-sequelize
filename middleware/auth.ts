import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.headers.authorization) {
      return res.status(400).json({ message: "Invalid request" });
    }

    const token = req.headers.authorization.split(" ")[1];
    var decoded = jwt.verify(token, "gj383fh13sf8");

    // @ts-ignore
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(400).json(error);
  }
};

export default authMiddleware;
