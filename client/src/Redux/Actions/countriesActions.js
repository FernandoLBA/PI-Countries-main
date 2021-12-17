import {
  GET_COUNTRIES,
  GET_COUNTRY_BY_NAME,
  GET_CONTINENTS,
  CLEAR_COUNTRY_DETAIL,
  GET_COUNTRY_BY_ID,
  FILTER_BY_CONTINENTS,
  FILTER_BY_ACTIVITIES,
  SORT_COUNTRIES,
} from "../Constants/actionTypes";
import axios from "axios";

export const getCountries = () => {
  return async function (dispatch) {
    await axios
      .get("http://localhost:3001/countries")
      .then((response) => {
        return dispatch({
          type: GET_COUNTRIES,
          payload: response.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const getContinents = () => {
  return function (dispatch) {
    dispatch({
      type: GET_CONTINENTS,
    });
  };
};

export const getCountryByName = (name) => {
  return async function (dispatch) {
    await axios
      .get(`http://localhost:3001/countries?name=${name}`)
      .then((response) => {
        return dispatch({
          type: GET_COUNTRY_BY_NAME,
          payload: response.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const getCountryById = (id) => {
  return async function (dispatch) {
    await axios.get(`http://localhost:3001/countries/${id}`).then((response) => {
      return dispatch({
        type: GET_COUNTRY_BY_ID,
        payload: response.data,
      });
    });
  };
};

export const clearCountryDetail = () => {
  return function (dispatch) {
    dispatch({
      type: CLEAR_COUNTRY_DETAIL,
    });
  };
};

export const filterByActivities = (filter) => {
  return function (dispatch) {
    dispatch({
      type: FILTER_BY_ACTIVITIES,
      payload: filter,
    });
  };
};

export const filterByContinents = (filter) => {
  return function (dispatch) {
    dispatch({
      type: FILTER_BY_CONTINENTS,
      payload: filter,
    });
  };
};

export const sortCountries = (sort) => {
  return function (dispatch) {
    dispatch({
      type: SORT_COUNTRIES,
      payload: sort,
    });
  };
};
