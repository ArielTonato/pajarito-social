import { Router } from "express";

const postsRouter = Router();   

postsRouter.get("/", (req, res) => {
  res.send("GET /posts");
});