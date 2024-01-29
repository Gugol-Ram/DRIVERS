const { getDriverById } = require("../Controllers/getByIdCtrl");

const getDriverByIdHandler = async (req, res) => {
  const { id } = req.params;
  const source = isNaN(id) ? "BD" : "API";
  //establecer la fuente donde vamos a buscar el id. source tendra 2 valores posibles BD o API. uso TERNARIO.

  try {
    const idSearch = await getDriverById(id, source);
    res.status(200).json(idSearch);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getDriverByIdHandler,
};
