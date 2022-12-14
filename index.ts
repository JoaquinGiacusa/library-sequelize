import express from "express";
import { sequelize } from "./models";
import appRouter from "./routes";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3001",
  })
);

app.post("/sync", async (req, res) => {
  sequelize
    .authenticate()
    .then(async () => {
      console.log("database connected");

      try {
        await sequelize.sync({ force: true });
        return res.status(200).json({ message: "sync complete" });
      } catch (error: any) {
        console.log(error.message);
      }
    })
    .catch((e: any) => {
      console.log(e.message);
    });
});

app.use(appRouter);

app.listen(3000, () => {
  return console.log(`Server running on 3000`);
});
