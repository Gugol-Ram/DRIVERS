const axios = require("axios");
const { Driver, Teams } = require("../db");
require("dotenv").config();
const cleanProps = require("./cleanProps");

const getAllDrivers = async () => {
  //buscando en la BD
  const dataBaseDrivers = await Driver.findAll({
    include: {
      model: Teams,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });

  // buscando en la "API"
  const response = await axios.get(`http://localhost:5000/drivers`);

  const apiDrivers = response.data; //respuesta completa(CRUDA)

  const cleanApiDrivers = cleanProps(apiDrivers); //limpio las props que no necesito

  return [...dataBaseDrivers, ...cleanApiDrivers]; //unifico la data y devuevlo API + BD
};

module.exports = getAllDrivers;

//
