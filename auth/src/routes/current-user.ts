import { Router } from "express";
import jwt from "jsonwebtoken";
import { BadRequestError } from "../errors/bad-request-error";
import { currentUser } from "../middlewares/current-user";

const router = Router();

router.get("/api/users/currentuser", currentUser, async (req, res) => {
  res.send({ currentUser: req.currentUser });
});

export { router as currentUserRouter };
