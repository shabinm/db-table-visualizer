const { Pool, Client } = require('pg');
const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
})

async function connect(){
    await client.connect();
}

async function runQuery(query){
    try{
        const result = await client.query(query);
        return result.rows;
    } catch(e){
        console.error(e);
        console.error(e.stack);
    } finally {
        return []
    }
}

async function close(){
    await client.end();
}

module.exports = {
    connect: connect,
    runQuery: runQuery,
    close: close
}