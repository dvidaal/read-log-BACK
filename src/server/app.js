import cors from "cors";
import express from "express";
import { usersRouters } from "./routers/usersRouters/usersRouters.js";
import { booksRouters } from "./routers/booksRouters/booksRouters.js";

export const app = express();
app.disable("x-powered-by");

const corsOptions = {
  credentials: true,
  origin: [
    process.env.CORS_ALLOWED_ORIGIN_LOCAL,
    process.env.CORS_ALLOWED_ORIGIN_PRODUCTION,
    process.env.CORS_ALLOWED_ORIGIN_PRODUCTION_1,
    process.env.CORS_ALLOWED_ORIGIN_PRODUCTION_2,
  ],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/read-log", cors(corsOptions), booksRouters);
app.use("/users", usersRouters);
