const router = require("express").Router();

const tablesRouter = require("./table");

// routes related to tables
router.use("/tables", tablesRouter);

module.exports = router