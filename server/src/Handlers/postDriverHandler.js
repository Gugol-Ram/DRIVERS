const { createNewDriver } = require("../Controllers/postDriverCtrl");

const createNewDriverHandler = async (req, res) => {
  const { name, surname, description, image, nationality, dateOfBirth, teams } =
    req.body;

  try {
    const newDriver = await createNewDriver({
      name,
      surname,
      description,
      image,
      nationality,
      dateOfBirth,
      teams,
    });
    res.status(200).json(newDriver);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createNewDriverHandler,
};
