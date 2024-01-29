import {
  CLEAR_DETAILS,
  DELETE_DRIVER,
  FILTER_BY_SOURCE,
  FILTER_BY_TEAMS,
  GET_DRIVERS,
  GET_DRIVER_BY_ID,
  GET_DRIVER_BY_ID_ERROR,
  GET_DRIVER_BY_NAME,
  GET_TEAMS,
  // eslint-disable-next-line
  ORDER_BY,
  POST_DRIVER,
  REFRESH_FORM,
  // TEAM_COMB,
} from "../Actions/actionTypes";
import { isUUIDv4 } from "../../Utils/Utils";

let initialState = {
  drivers: [],
  allDrivers: [], //backup o donde guardar filtrados
  driversForAPI: [], //estado para que no rompa si primero filtro por DB y luego voy a  API
  driversB: [],
  driversById: {},
  teams: [],
  teamDrivers: [],
  loading: false,
  error: null,
  form: {},
  filters: {
    //estado para hacer filtros combinados(no se pisen)
    teams: "All",
    source: "all",
    sortBy: "",
    selectedTeams: [], //para filtrar de a varios equipos(todavia falla)
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DRIVERS: //✅
      return {
        ...state,
        drivers: [...action.payload],
        allDrivers: [...action.payload],
        teamDrivers: [...action.payload],
        driversForAPI: [...action.payload],
        driversB: [...action.payload],
      };

    // 🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗

    case GET_DRIVER_BY_NAME: //✅
      return {
        ...state,
        allDrivers: [...action.payload],
        drivers: [...action.payload],
      };

    // 🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗

    case GET_DRIVER_BY_ID: //✅
      return {
        ...state,
        driversById: action.payload,
        loading: false,
        error: null,
      };

    case DELETE_DRIVER:
      return {
        ...state,
        driversById: action.payload,
        allDrivers: action.payload, //para actualzar pantalla digamos
      };

    case GET_DRIVER_BY_ID_ERROR:
      return {
        loading: false,
        error: action.payload,
      };

    // 🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗

    case GET_TEAMS: //✅
      return {
        ...state,
        teams: action.payload,
      };

    // 🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗

    case CLEAR_DETAILS: //✅
      return {
        ...state,
        driversById: {},
      };

    // 🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗

    case FILTER_BY_TEAMS:
      const isIDv4 = isUUIDv4;

      const newTeam = action.payload === "All" ? "All" : action.payload;

      const filteredDriversByTeam = state.drivers.filter((driver) => {
        if (!driver.teams && !driver.Teams) return false;

        if (!isIDv4(driver.id)) {
          // Si el ID no es un UUIDv4, se usa la estructura 'teams'
          const teamsArray = driver.teams.split(", ");
          return newTeam === "All" ? true : teamsArray.includes(newTeam);
        } else {
          // Si el ID es un UUIDv4, se usa la estructura 'Teams'
          const teamsArray = driver.Teams.map((team) => team.name);
          return newTeam === "All" ? true : teamsArray.includes(newTeam);
        }
      });

      return {
        ...state,
        allDrivers: filteredDriversByTeam,
        filters: {
          ...state.filters,
          teams: newTeam,
        },
      };

    // 🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗

    case FILTER_BY_SOURCE: //✅
      const newSource = action.payload;

      if (newSource === "all") {
        return {
          ...state,
          allDrivers: state.driversB,
        };
      }

      let filteredDriversBySource =
        newSource === "DataBase"
          ? state.drivers.filter((driver) => typeof driver.id === "string")
          : state.driversForAPI.filter(
              (driver) => typeof driver.id === "number"
            );

      return {
        ...state,
        allDrivers: filteredDriversBySource,
        filters: {
          ...state.filters,
          source: newSource,
        },
      };

    // 🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗

    case ORDER_BY: //✅
      const newSortBy = action.payload;
      let sortedDrivers = [...state.allDrivers];

      switch (newSortBy) {
        case "Default":
          return {
            ...state,
            allDrivers: state.driversB,
          };

        case "A-Z":
          sortedDrivers.sort((a, b) => a.name.localeCompare(b.name));
          break;

        case "Z-A":
          sortedDrivers.sort((a, b) => b.name.localeCompare(a.name));
          break;

        case "DATE UP":
          sortedDrivers.sort((a, b) => {
            const dateA = new Date(a.dateOfBirth);
            const dateB = new Date(b.dateOfBirth);
            return dateB - dateA;
          });
          break;
        case "DATE DOWN":
          sortedDrivers.sort((a, b) => {
            const dateA = new Date(a.dateOfBirth);
            const dateB = new Date(b.dateOfBirth);
            return dateA - dateB;
          });
          break;
        default:
          break;
      }

      return {
        ...state,
        allDrivers: sortedDrivers,
        drivers: sortedDrivers,
        filters: {
          ...state.filters,
          sortBy: newSortBy,
        },
      };

    // 🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗

    case POST_DRIVER: //✅
      return {
        ...state,
        drivers: action.payload,
      };

    // 🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗

    case REFRESH_FORM: //⚠️
      return {
        ...state,
        form: {},
      };

    default:
      return state;
  }
};

export default rootReducer;
