require('dotenv').config({path: __dirname+"/.env"});
const express = require("express");
const dbConfig = require("./db/config");

const app = express();
app.use(express.static(__dirname + '/public'))

const cors = require("cors");
app.use(cors());

const routes = require("./routes");
app.use("/api", routes);
app.set('etag', false);


(async ()=>{
    await dbConfig.connect();
    app.listen(process.env.PORT || 4000);
})();


  