import { NextFunction, Request, Response } from "express";

export const errorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(`🔥 Error: ${err.message}`);
  res.status(500).json({ success: false, message: "Internal Server Error" });
};
