import { Router } from "express";
import { createTariffs, getAlltariffs } from "../controllers/tariffs.controller.js";

 const tariffsrouter = Router()

tariffsrouter
 .get("/tariffs",getAlltariffs)
 .post("/tariffs",createTariffs)



export default tariffsrouter

