import { Router } from "express";
import { getAllUsers,createUser, updateUser, deleteUser } from "../controllers/users.controller.js";


const userRouter = Router()

userRouter
.get("/users", getAllUsers)
.post("/users",createUser)
.put("/users/:id" ,updateUser)
.delete("/users/:id",deleteUser);

export default userRouter