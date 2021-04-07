import { Router, Request, Response } from "express";
import {body, validationResult} from 'express-validator'
import { RequestValidationError } from "../errors/request-Validation-Error";

const router = Router();

router.post("/api/users/signin", [
  body('email').withMessage('Email must be valid'),
  body('password').trim().notEmpty().withMessage('Input your password')
], (req: Request, res: Response) => {

  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    throw new RequestValidationError(errors.array())
  }

  const {email, password} = req.body
  res.send("signin");
});

export { router as signinRouter };
