// case FILTER_BY_TEAMS:
//   const isUUIDv4 = (str) => {
//     const uuidv4Pattern =
//       /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
//     return uuidv4Pattern.test(str);
//   };

//   const newTeam = action.payload === "All" ? "All" : action.payload;
//   const filteredDriversByTeam =
//     newTeam === "All"
//       ? state.teamDrivers
//       : state.teamDrivers.filter((driver) => {
//           if (!driver.teams) return false;
//           const from = isUUIDv4(driver.id)
//             ? driver.Teams.map((team) => team.name).includes(newTeam)
//             : driver.teams.includes(newTeam);

//           return from;
//         });

//   return {
//     ...state,
//     allDrivers: filteredDriversByTeam,
//     filters: {
//       ...state.filters,
//       teams: newTeam,
//     },
//   };

// case TEAM_COMB:
//   const selectedTeam = action.payload;

//   // copio el equipo elegido:
//   let selections = state.filters.selectedTeams.slice();

//   // verifico que no repita
//   if (selectedTeam !== "All" && !selections.includes(selectedTeam)) {
//     selections.push(selectedTeam);
//   }
//   // filtro en base a equipos seleccionados
//   const filteredDriversByTeamComb =
//     selections.length > 0
//       ? state.teamDrivers.filter((drive) => {
//           const driverTeam = drive.teams ? drive.teams.split(", ") : [];
//           return selections.every((teamSelected) =>
//             driverTeam.includes(teamSelected)
//           );
//         })
//       : state.teamDrivers;
//   console.log(filteredDriversByTeamComb);

//   return {
//     ...state,
//     allDrivers: filteredDriversByTeamComb,
//     filters: {
//       ...state.filters,
//       selections,
//     },
//   };

// case FILTER_BY_SOURCE:
//   const newSource = action.payload;
//   const filteredDriversBySource =
//     newSource === "all"
//       ? state.allDrivers
//       : newSource === "DataBase"
//       ? state.allDrivers.filter((drivers) => typeof drivers.id === "string")
//       : state.allDrivers.filter(
//           (drivers) => typeof drivers.id === "number"
//         );

//   return {
//     ...state,
//     allDrivers: filteredDriversBySource,
//     filters: {
//       ...state.filters,
//       source: newSource,
//     },
//   };
//  esto usaba para filtrar pero andaba incorrecto el filtro de SOURCE.fue corregido pero aun persiste el error de que si aplico un filtro de source(por ejemplo mostrar solo los de DB) y a este le aplico alguno de los otros(ordenar nombre o dob) si funcionan hasta ahi, PERO si quiero aplicar un nuevo filtro de source(buscar a la API ahora) ya no responde, se queda tildado en eso.

// case FILTER_BY_SOURCE:
//   const newSource = action.payload;
//   let filteredDriversBySource = state.drivers;
//   let filteredByAPI = state.driversForAPI;

//   if (newSource !== "all") {
//     filteredDriversBySource =
//       newSource === "DataBase"
//         ? state.drivers.filter((driver) => typeof driver.id === "string")
//         : state.driversForAPI.filter(
//             (driver) => typeof driver.id === "number"
//           );
//   }
//   if (newSource === "all") {
//     return filteredDriversBySource;
//   }

//   return {
//     ...state,
//     allDrivers: filteredDriversBySource,
//     driversForAPI: filteredByAPI,
//     filters: {
//       ...state.filters,
//       source: newSource,
//     },
//   };
// CORREGIDO el error del anterior, pero tenia error al volver a seleccionar la opcion "filter by source" no cargaba nada(el estado estaba pisado por el filtro aplicado justamente) solucion: CREAR  otro estado extra que tambien guarde todos los drivers y usarlo en el caso "all"

// FILTRO POR EQUIPO PERO NO FUNCIONABA EL FILTRO DE LO CREADO EN LA DB
// case FILTER_BY_TEAMS: //⚠️
//   const isUUIDv4 = (str) => {
//     const uuidv4Pattern =
//       /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
//     return uuidv4Pattern.test(str);
//   };

//   const newTeam = action.payload === "All" ? "All" : action.payload;
//   const filteredDriversByTeam =
//     newTeam === "All"
//       ? state.teamDrivers
//       : state.drivers.filter((driver) => {
//           if (!driver.teams) return false;
//           const from = !isUUIDv4(driver.id)
//             ? driver.teams.includes(newTeam)
//             : driver.Teams.map((team) => team.name).includes(newTeam);

//           return from;
//         });

//   return {
//     ...state,
//     allDrivers: filteredDriversByTeam,
//     filters: {
//       ...state.filters,
//       teams: newTeam,
//     },
//   };
