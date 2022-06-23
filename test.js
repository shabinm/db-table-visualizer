console.log(process.env) // remove this after you've confirmed it working

const { Pool, Client } = require('pg')

const pool = new Pool();

let query = "SELECT table_name FROM information_schema.tables WHERE table_schema='public'";
// let query = 'SELECT NOW()';

pool.query(query, (err, res) => {
    console.log(err, res)
     pool.end()
});