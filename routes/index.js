import { Router } from "express";
import userRouter from "./users.routes.js";
import consertRouter from "./consert.routes.js";
import tariffsrouter from "./tariffs.routes.js";
import ticketsrouter from "./tickets.routes.js";

const apiRouter = Router();

apiRouter.use(userRouter,consertRouter,tariffsrouter,ticketsrouter);

export default apiRouter
