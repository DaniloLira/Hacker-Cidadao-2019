const express = require("express");
const LocationController = require("./controller/LocationController");
//const verifyToken = require("./verifyToken");

const routes = express.Router();

//Login
//routes.post("/login", AuthController.login);

//Routes to location
routes.post("/novoProcedimento", LocationController.store);

module.exports = routes;
