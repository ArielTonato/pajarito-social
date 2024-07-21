import { validatePartialUser, validateUser } from "../schemes/user.js";
import { UserModel } from "../models/user.js";
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();
export class UserController{
    static  async register(req, res) {
        const { username, email, password } = req.body;  
        const result = validateUser({ username:username.trim(), email:email.trim(), password:password.trim() });
        if(result.error) {
            return res.status(400).json({ error: result.error });
        }
        const validUser = result.data;
        const user = await UserModel.register({ username:username,email:validUser.email, password:password});
        if(user instanceof Error) {
            return res.status(400).json({ error: user.message });
        }
        return res.status(201).json({ message: 'Usuario Creado' });
    }

    static async login(req, res) {
        const { email, password } = req.body;
        const result = validatePartialUser({ email, password});
        if(result.error) {
            return res.status(400).json({ error: result.error });
        }
        const validUser = result.data;
        const user = await UserModel.login({ email:validUser.email, password:validUser.password });
        if(user instanceof Error) {
            return res.status(400).json({ error: user.message });
        }
        const token = jwt.sign({user:user.email}, process.env.SECRET,{
            expiresIn: '1h'
        });
        res.cookie("access_token",token,{
            httpOnly:true,
            secure: process.env.NODE_ENV === 'production',
            sameSite:'strict',
            maxAge: 60*60*1000
        });
        return res.send({ message: 'Inicio de sesion exitoso' });
    }
}