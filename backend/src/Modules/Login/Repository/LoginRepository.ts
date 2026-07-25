import {Pool} from "pg";

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "projeto_evol",
    password: "evol@123",
    port: 5432,
});

export async function loginRepository(email: string, password: string): Promise<boolean> {
    const query = "SELECT * FROM registrar WHERE email = $1 AND password = $2";
    const values = [email, password];

    const result = await pool.query(query, values);
    return result.rows.length > 0;
}