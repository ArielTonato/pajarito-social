import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';

const config = {
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'admin123',
    database: 'pajaritosocial'
}

const connection = await mysql.createConnection(config);

export class UserModel {
    static async register({ username, email, password }) {
        const emailLowerCase = email.toLowerCase();
        const usernameLowerCase = username.toLowerCase();
        const [users] = await connection.query('SELECT email FROM users WHERE email = ?', [emailLowerCase]);
        if (users.length > 0) return  new Error('El correo ya se encuentra registrado');
        const [usernames] = await connection.query('SELECT username FROM users WHERE username = ?', [username]);
        if (usernames.length > 0) return new Error('El nombre de usuario ya está registrado');
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await connection.query('INSERT INTO users (username, email, password) VALUES (?,?,?)', [usernameLowerCase,emailLowerCase, hashedPassword]);
        return result;
    }

    static async login({ email, password }) {
        const emailLowerCase = email.toLowerCase();
        const [users] = await connection.query('SELECT email, password FROM users WHERE email = ?', [emailLowerCase]);
        if (users.length === 0) return new Error('Usuario no encontrado');
        const isValid = await bcrypt.compare(password, users[0].password);
        if (!isValid) return new Error('Credenciales inválidas');
        return users[0];
    }
}