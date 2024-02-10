import express from "express";

import {
  updateUser,
  deleteUser,
  getAllUser,
  getSingleUser,
} from "../Controllers/userController.js";

import { authenticate } from "../auth/verifyToken.js";
const router = express.Router();

router.get("/:id", getSingleUser);
router.get("/", getAllUser);
router.get("/:id", updateUser);
router.get("/:id", deleteUser);

export default router;
