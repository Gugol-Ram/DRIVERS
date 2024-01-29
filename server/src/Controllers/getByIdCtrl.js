const { Driver, Teams } = require("../db");
const getAllDrivers = require("./getDriversCtrl");

const getDriverById = async (id, source) => {
  if (source === "API") {
    const response = await getAllDrivers();
    const idMatch = response.find((driver) => driver.id === parseInt(id));

    if (idMatch) return idMatch;
    else throw new Error("API Driver not found");
  } else if (source === "BD") {
    const dbDriver = await Driver.findByPk(id, {
      include: {
        model: Teams,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    return dbDriver;
  } else {
    throw new Error("DB Driver not found");
  }
};

module.exports = {
  getDriverById,
};
