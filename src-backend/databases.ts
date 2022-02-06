import { Pool, Client } from 'pg';

export function select() {
  const pool = new Pool({
    user: 'postgres',
    host: '172.20.209.19',
    database: 'postgres',
    password: 'postgres',
    port: 5432
  });

  pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res);
    pool.end();
  })
}


