const { Router } = require("express");
const { getAllTeamsHandler } = require("../Handlers/getTeamsHandler");

const teamsRoutes = Router();

// ENDPOINT
teamsRoutes.get("/", getAllTeamsHandler);

module.exports = teamsRoutes;
