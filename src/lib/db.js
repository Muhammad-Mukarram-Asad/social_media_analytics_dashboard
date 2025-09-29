import mysql from 'mysql2/promise';

export async function query (sql, params) {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT, // should come if your port is not 3306 by default
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    });

    try {
        const [results] = await connection.execute(sql, params); // it returns 2 values 1) Actual Data, 2) Meta tags and other info
        await connection.end();
        return results;
    } catch (error) {
        await connection.end();
        throw error;
    }
}