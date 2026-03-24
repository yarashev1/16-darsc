import { Router } from "express";
import { CreateConserts, deleteConserts, GetAllConserts,  UpdateConserts  } from "../controllers/consert.controller.js";


const consertRouter = Router();

consertRouter.get("/consert", GetAllConserts)
consertRouter.post("/consert",CreateConserts)
consertRouter.put("/consert/:id",UpdateConserts)
consertRouter.delete("/consert/:id",deleteConserts)

export default consertRouter