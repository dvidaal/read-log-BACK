import express from "express";
import { usersRouters } from "./routers/usersRouters/usersRouters.js";
import { booksRouters } from "./routers/booksRouters/booksRouters.js";

export const app = express();
app.disable("x-powered-by");

app.use(express.json());
app.use("/read-log", booksRouters);
app.use("/users", usersRouters);
