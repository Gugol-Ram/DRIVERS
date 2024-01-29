import axios from "axios";
import {
  GET_DRIVERS,
  GET_DRIVER_BY_NAME,
  GET_DRIVER_BY_ID,
  GET_DRIVER_BY_ID_ERROR,
  GET_DRIVER_BY_ID_REQUEST,
  CLEAR_DETAILS,
  GET_TEAMS,
  FILTER_BY_TEAMS,
  FILTER_BY_SOURCE,
  ORDER_BY,
  REFRESH_FORM,
  TEAM_COMB,
  POST_DRIVER,
  DELETE_DRIVER,
} from "./actionTypes";
const URL = "http://localhost";
const PORT = process.env.PORT || 3001;

// ACA ES LA RELACION FRONT-BACK,CLAVE!!

export const getDrivers = () => {
  return async function (dispatch) {
    const response = await axios.get(`${URL}:${PORT}/drivers`);
    return dispatch({
      type: GET_DRIVERS,
      payload: response.data,
    });
  };
};

export const getDriverByName = (name) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL}:${PORT}/drivers/name/${name}`);
      return dispatch({
        type: GET_DRIVER_BY_NAME,
        payload: response.data,
      });
    } catch (error) {
      alert("Name not found! Please Retry");
    }
  };
};

export const getDetailDriver = (id) => {
  return async function (dispatch) {
    dispatch({
      type: GET_DRIVER_BY_ID_REQUEST,
    });
    try {
      const response = await axios.get(`${URL}:${PORT}/drivers/${id}`);
      return dispatch({
        type: GET_DRIVER_BY_ID,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: GET_DRIVER_BY_ID_ERROR,
        payload: "No ID Match",
      });
    }
  };
};

export const clearDetails = (id) => {
  return async function (dispatch) {
    try {
      dispatch({
        type: CLEAR_DETAILS,
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getTeams = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL}:${PORT}/teams`);
      return dispatch({
        type: GET_TEAMS,
        payload: response.data,
      });
    } catch (error) {
      return {
        error: error.message,
      };
    }
  };
};

export const filterTeams = (teams) => {
  return {
    type: FILTER_BY_TEAMS,
    payload: teams,
  };
};

export const orderBy = (payload) => {
  return {
    type: ORDER_BY,
    payload,
  };
};

export const filterBySource = (value) => {
  return {
    type: FILTER_BY_SOURCE,
    payload: value,
  };
};

export const teamComb = (value) => {
  return {
    type: TEAM_COMB,
    payload: value,
  };
};

export const postDriver = (data) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(`${URL}:${PORT}/drivers`, data);
      alert("Driver Created Successfully!");
      return response;
    } catch (error) {
      return dispatch({
        type: POST_DRIVER,
      });
    }
  };
};

export const refreshForm = () => {
  return async function (dispatch) {
    try {
      dispatch({
        type: REFRESH_FORM,
      });
    } catch (error) {
      return {
        error: error.message,
      };
    }
  };
};

export const deleteDriver = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.delete(`${URL}:${PORT}/drivers/${id}`);
      return dispatch({
        type: DELETE_DRIVER,
        payload: response.data,
      });
    } catch (error) {
      return {
        error: error.message,
      };
    }
  };
};
