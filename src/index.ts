import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import { errorMiddleware } from "./middlewares/errorMiddleware";

dotenv.config({ path: ".env.development" });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello world" });
});

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
