const router = require("express").Router();

const tablesController = require("../controllers/tables.controller");

router.get("/", tablesController.listTables);
router.get("/:tableName/data", tablesController.getTableData);

module.exports = router;