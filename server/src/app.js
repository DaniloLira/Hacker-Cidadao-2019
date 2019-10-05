const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const pg = require("pg");
const routes = require("./routes");
const cors = require("cors");
require("dotenv/config");

//midlewares
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(routes);

//Connect to db

//Listenner
app.listen(3333);
