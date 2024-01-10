import express from "express";
import trimRequest from "trim-request";

import {
  allusers,
  authUser,
  getUserProfile,
  loginStatus,
  logoutUser,
  register,
  updateUserClr,
  updateUserProfile,
} from "../controllers/userControllers.js";
import { admin, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", trimRequest.all, register);
router.post("/login", trimRequest.all, authUser);
router.get("/", allusers);

router.get("/logout", protect, logoutUser);
router.get("/mine", protect, getUserProfile);
router.get("/user-status", loginStatus);
router.put("/update-user", protect, updateUserProfile);
router.put("/:id", protect, admin, updateUserClr);

export default router;
