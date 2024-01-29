const { getDriverByName } = require("../Controllers/getByNameCtrl");

const getDriverByNameHandler = async (req, res) => {
  try {
    const { name } = req.params;
    const response = await getDriverByName(name);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getDriverByNameHandler,
};
