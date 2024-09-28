import express from "express";
import { login, logout, signup } from "../controllers/users.controller.ts";
import protectRoute from "../middlewares/ProtectRoute.ts";

const UserRouter = express.Router();

UserRouter.post("/signup", signup);
UserRouter.post("/login", login);
UserRouter.get("/logout", logout);

export default UserRouter;
