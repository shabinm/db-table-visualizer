const { response } = require("express");
const { runQuery } = require("../db/config")

async function listTables(request, response){
    let query = "SELECT table_name FROM information_schema.tables WHERE table_schema='public'";
    let data = await runQuery(query);
    response.send(data.map(t=>t.table_name));
};

async function getTableData(request, response){
    let tableName = request.params.tableName;
    let query = `SELECT * FROM ${tableName}`;
    let data = await runQuery(query);
    response.send(data);
}

module.exports = {
    listTables: listTables,
    getTableData: getTableData
};