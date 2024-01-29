const getAllDrivers = require("./getDriversCtrl");

// BUSCA TANTO POR NOMBRE COMO POR APELLIDO(mejor fitlrado)
const getDriverByName = async (nameOrSurname) => {
  if (!nameOrSurname) {
    throw new Error("Name or Surname is required.");
  }

  const response = await getAllDrivers();

  if (!response) {
    throw new Error("Server response REJECTED.");
  }

  const filtered = response.filter((driver) => {
    const fullName = `${driver.name} ${driver.surname}`;
    return fullName.toLowerCase().includes(nameOrSurname.toLowerCase());
  });

  if (filtered.length === 0) {
    // alert("Name not Found");
    throw new Error("Driver name or surname not exists");
  }

  return filtered;
};

module.exports = {
  getDriverByName,
};

//BUSCA SOLO POR NOMBRE
// const getAllDrivers = require("./getDriversCtrl");

// const getDriverByName = async (name) => {
//   if (!name) {
//     throw new Error("Name is required.");
//   }

//   const response = await getAllDrivers();

//   if (!response) {
//     throw new Error("Server response REJECTED.");
//   }

//   const filtered = response.filter((driver) => {
//     return driver.name.toLowerCase().includes(name.toLowerCase());
//   });

//   if (filtered.length === 0) {
//     throw new Error("Driver not found.");
//   }

//   return filtered;
// };

// module.exports = {
//   getDriverByName,
// };
