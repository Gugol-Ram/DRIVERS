const { getAllTeams } = require("../Controllers/getTeamsCtrl");

const getAllTeamsHandler = async (req, res) => {
  try {
    const team = await getAllTeams();
    res.status(200).json(team);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllTeamsHandler,
};
