import { Router } from "express";
import { PostController } from "../controllers/post.js";
export const postsRouter = Router();   

postsRouter.post("/create", PostController.createPost);
postsRouter.post("/get", PostController.getPosts);