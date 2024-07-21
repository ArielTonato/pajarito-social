import { validatePost } from "../schemes/post.js";
import { PostModel } from "../models/post.js";

export class PostController {
    static async createPost(req, res) {
        const { email_user, post } = req.body;
        const result = validatePost({ email_user: email_user.trim(), post: post.trim() });
        if (result.error) {
            return res.status(400).json({ error: result.error });
        }
        const validPost = result.data;
        const postResult = await PostModel.createPost({ email_user: validPost.email_user, post: validPost.post });
        if (postResult instanceof Error) {
            return res.status(400).json({ error: postResult.message });
        }
        return res.status(201).json({ message: 'Post Creado' });
    }

    static async getPosts(req, res) {
        const { email_user } = req.body;
        const posts = await PostModel.getPosts({ email_user: email_user });
        if (posts instanceof Error) {
            return res.status(400).json({ error: posts.message });
        }
        return res.send(posts);
    }
}