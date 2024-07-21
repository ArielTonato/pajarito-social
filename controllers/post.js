import { validatePost } from "../schemes/post.js";
import { PostModel } from "../models/post.js";
import jwt from 'jsonwebtoken';

export class PostController {
    static async createPost(req, res) {
        const token = req.cookies.access_token;
                if (!token) {
            return res.status(401).json({ error: 'No Cuenta con un token' });
        }

        jwt.verify(token, process.env.SECRET, async (err, user) => {
            if (err) {
                return res.status(401).json({ error: 'Token no válido' });
            }

            const { email_user, post } = req.body;
            const result = validatePost({ email_user: email_user.trim(), post: post.trim() });
            if (result.error) {
                return res.status(400).json({ error: result.error });
            }

            const validPost = result.data;
            try {
                await PostModel.createPost({ email_user: validPost.email_user, post: validPost.post });
                return res.status(201).json({ message: 'Post Creado' });
            } catch (error) {
                return res.status(400).json({ error: error.message });
            }
        });
    }


    static async getPosts(req, res) {
        const token = req.cookies.access_token;
        if (!token) {
            return res.status(401).json({ error: 'No Cuenta con un token' });
        }

        jwt.verify(token, process.env.SECRET, async (err, user) => {
            if (err) {
                return res.status(401).json({ error: 'Token no válido' });
            }

            const { email_user } = req.body;
            const posts = await PostModel.getPosts({ email_user: email_user });
            if (posts instanceof Error) {
                return res.status(400).json({ error: posts.message });
            }
            return res.send(posts);
        });

    }
}