import "../../../loadEnvironment.js";
import { Router } from "express";
import { loginUser } from "../../controllers/userControllers/userControllers";

export const usersRouters = Router();

usersRouters.post("/login", loginUser);
