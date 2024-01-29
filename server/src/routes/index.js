const { Router } = require("express");
const driversRoutes = require("./DriversRoutes");
const teamsRoutes = require("./TeamsRoutes");

const router = Router();

router.use("/drivers", driversRoutes); //ante peticiones a /drivers, ira a buscar su ENDPOINT al archivo driversRoutes --> respectivo Handler --> respectivo Ctrl

router.use("/teams", teamsRoutes); //identica logica

module.exports = router;
