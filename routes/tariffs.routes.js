import { Router } from "express";
import { createTariffs, deletetariffs, getAlltariffs, updatetariffs } from "../controllers/tariffs.controller.js";

 const tariffsrouter = Router()

tariffsrouter
 .get("/tariffs",getAlltariffs)
 .post("/tariffs",createTariffs)
 .put("/tariffs/:id",updatetariffs)
 .delete("/tariffs/:id",deletetariffs)



export default tariffsrouter

