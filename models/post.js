import { connection } from "../utils/MysqlConnection.js";

export class PostModel{
    static async createPost({ email_user, post }) {
        try {
            const [result] = await connection.query('INSERT INTO posts (email_user, post) VALUES (?,?)', [email_user, post]);
            return result;
        }catch(error) {
            return new Error('Hubo un error al crear el post, intenta de nuevo');
        }
    }

    static async getPosts({email_user}) {
        try {
            const [result] = await connection.query('SELECT * FROM posts WHERE email_user = ?', [email_user]);
            return result;
        }catch(error) {
            return new Error('Hubo un error al obtener los posts, intenta de nuevo');
        }
    }
}