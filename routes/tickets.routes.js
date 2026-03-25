import { Router } from "express";
import { createTickets, deleteTickets, getAlltickets } from "../controllers/tickets.controller.js";


const ticketsrouter = Router()

ticketsrouter
.get("/tickets",getAlltickets)
.post("/tickets", createTickets)
.delete("/tickets/:id",deleteTickets)


export default ticketsrouter
