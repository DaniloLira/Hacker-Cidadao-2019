const express = require("express");
const LocationController = require("./controller/LocationController");
const AcidenteController = require("./controller/AcidenteController");
//const verifyToken = require("./verifyToken");

const routes = express.Router();

//Login
//routes.post("/login", AuthController.login);

//Routes to location
routes.post("/novoProcedimento", LocationController.store);
routes.post("/novoFormulario", AcidenteController.store);
routes.post("/atualizarFormulario", AcidenteController.update);

module.exports = routes;
