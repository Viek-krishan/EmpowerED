import { Router } from "express";
import { RegisterTeacher,LogInTeacher } from "../controllers/teacher.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { VerifyUser } from "../middlewares/auth.middleware.js";

// Initilizing router
const router = Router();

// Register route
router.route("/register/teacher").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "introVideo",
      maxCount: 1,
    },
  ]),
  RegisterTeacher
);
router.route("/login/teacher").post(LogInTeacher);

// secure routes


export default router;
