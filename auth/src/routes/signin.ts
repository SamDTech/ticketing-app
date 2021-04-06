import { Router, Request, Response } from "express";

const router = Router();

router.post("/api/users/signin", (req: Request, res: Response) => {

  const {} = req.body
  res.send("signin");
});

export { router as signinRouter };
