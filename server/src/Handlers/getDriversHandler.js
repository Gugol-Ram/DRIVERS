const getAllDrivers = require("../Controllers/getDriversCtrl");

const getAllDriversHandler = async (request, response) => {
  try {
    const drivers = await getAllDrivers();
    response.status(200).json(drivers);
  } catch (error) {
    response.status(400).json({ error: error.message });
  }
};

module.exports = { getAllDriversHandler };
