import express from "express";

export const app = express();
app.disable("x-powered-by");

app.use(express.json());
//app.use("/users");
