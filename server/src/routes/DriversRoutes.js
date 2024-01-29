const { Router } = require("express");
const { getAllDriversHandler } = require("../Handlers/getDriversHandler");
const { getDriverByNameHandler } = require("../Handlers/getByNameHandler");
const { getDriverByIdHandler } = require("../Handlers/getByIdHandler");
const { createNewDriverHandler } = require("../Handlers/postDriverHandler");
const { newDriverValidation } = require("../MiddleWare/Middles");

const driversRoutes = Router(); //driversRoutes sera igual a una instancia de esta clase(Router)

// ENDPOINTS!!

driversRoutes.get("/", getAllDriversHandler);

driversRoutes.get("/name/:name", getDriverByNameHandler);

driversRoutes.get("/:id", getDriverByIdHandler);

driversRoutes.post("/", newDriverValidation, createNewDriverHandler);

module.exports = driversRoutes;
