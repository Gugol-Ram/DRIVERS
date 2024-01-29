const { Teams } = require("../db");
const getAllDrivers = require("./getDriversCtrl");

const getAllTeams = async () => {
  try {
    const allDrivers = await getAllDrivers();

    // Crear un conjunto para almacenar los nombres de equipos únicos
    const uniqueTeamsSet = new Set();

    allDrivers.forEach((driver) => {
      // Buscar equipos en la propiedad 'teams' de la API si existe
      if (driver.teams) {
        const teamNames = driver.teams.split(",").map((team) => team.trim());
        teamNames.forEach((name) => {
          uniqueTeamsSet.add(name);
        });
      }

      // Buscar equipos en la propiedad 'Teams' de la base de datos si existe
      if (driver.Teams && Array.isArray(driver.Teams)) {
        const teamNames = driver.Teams.map((team) => team.name);
        teamNames.forEach((name) => {
          uniqueTeamsSet.add(name);
        });
      }
    });

    const uniqueTeams = Array.from(uniqueTeamsSet);

    if (uniqueTeams.length > 0) {
      const teamDB = await Teams.bulkCreate(
        uniqueTeams.map((name) => ({
          name: name,
        }))
      );
      return teamDB;
    } else {
      console.log("Teams not found");
      return [];
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  getAllTeams,
};

// const { Teams } = require("../db");
// const getAllDrivers = require("./getDriversCtrl");

// const getAllTeams = async () => {
//   try {
//     const allDrivers = await getAllDrivers();

//     // Crear un conjunto para almacenar los nombres de equipos únicos
//     const uniqueTeamsSet = new Set();

//     allDrivers.forEach((driver) => {
//       if (driver.teams) {
//         const teamNames = driver.teams.split(",").map((team) => team.trim());
//         teamNames.forEach((name) => {
//           uniqueTeamsSet.add(name);
//         });
//       }
//     });

//     const uniqueTeams = Array.from(uniqueTeamsSet);

//     if (uniqueTeams.length > 0) {
//       const teamDB = await Teams.bulkCreate(
//         uniqueTeams.map((name) => ({
//           name: name,
//         }))
//       );
//       return teamDB;
//     } else {
//       console.log("Teams not found");
//       return [];
//     }
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// module.exports = {
//   getAllTeams,
// };
