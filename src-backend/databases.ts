import { Pool, Client } from 'pg';
import * as dotenv from 'dotenv';

export function select() {
  dotenv.config();
  const pool = new Pool({
    user: process.env['PGUSER'],
    host: process.env['PGHOST'],
    database: process.env['PGDATABASE'],
    password: process.env['PGPASSWORD'],
    port: parseInt(process.env['PGPORT']!)
  });

  pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res);
    pool.end();
  })
}


