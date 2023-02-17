import express from "express";
const router = express.Router();

import {
  createUser,
  deleteUser,
  getAllUser,
  getIndividualUser,
  updateUser,
} from "../controllers/userControllers.js";

router.get("/", getAllUser); // GET ALL USERS
router.post("/create", createUser); // CREATE USER
router.get("/user/:id", getIndividualUser); // GET INDIVIDUAL USER
router.put("/user/:id", updateUser); // UPDATE USER
router.delete("/user/:id", deleteUser); // DELETE USER

export default router;
