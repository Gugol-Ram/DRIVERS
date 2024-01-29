const { Driver, Teams } = require("../db");

const createNewDriver = async ({
  name,
  surname,
  description,
  image,
  nationality,
  dateOfBirth,
  teams, // teams es una cadena de equipos separados por comas
}) => {
  const teamNames = teams.split(",").map((teamName) => teamName.trim());

  const newDriver = await Driver.create({
    name,
    surname,
    description,
    image,
    nationality,
    dateOfBirth,
  });

  for (const teamName of teamNames) {
    let team = await Teams.findOne({
      where: {
        name: teamName,
      },
    });

    if (!team) {
      team = await Teams.create({
        name: teamName,
      });
    }
    await newDriver.addTeams(team);
  }
  return newDriver;
};

module.exports = {
  createNewDriver,
};
