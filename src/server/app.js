import express from "express";
import { usersRouters } from "./routers/usersRouters/usersRouters";

export const app = express();
app.disable("x-powered-by");

app.use(express.json());
app.use("/users", usersRouters);
