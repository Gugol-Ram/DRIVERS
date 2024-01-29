const express = require("express");
const router = require("./routes/index.js");
const morgan = require("morgan");
const cors = require("cors");

require("./db.js");

// server.name = "API";

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use(router);

module.exports = server;
