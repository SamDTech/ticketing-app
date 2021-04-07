import { Router } from "express";
import jwt from "jsonwebtoken";
import { BadRequestError } from "../errors/bad-request-error";

const router = Router();

router.get("/api/users/currentuser", async (req, res) => {
  if (!req.session?.jwt) {
    return res.send({ currentUser: null });
  }

  try {
    const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!);

    res.send({ currentUser: payload });
  } catch (error) {
    res.send({ currentUser: null });
  }
});

export { router as currentUserRouter };
