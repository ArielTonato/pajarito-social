import mysql from 'mysql2/promise';

const config = {
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'admin123',
    database: 'pajaritosocial'
}

export const connection = await mysql.createConnection(config);