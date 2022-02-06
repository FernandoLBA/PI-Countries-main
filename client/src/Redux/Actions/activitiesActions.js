import { GET_ACTIVITIES } from "../Constants/actionTypes";
import axios from "axios";

const SERVER = "http://localhost:3001";

export const getActivities = () => {
  return async function (dispatch) {
    axios
      .get(`${SERVER}/activities`)
      .then((response) => {
        return dispatch({
          type: GET_ACTIVITIES,
          payload: response.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const setActivities = ({
  name,
  difficulty,
  duration,
  season,
  countries,
}) => {
  return async function () {
    await axios
      .post(`${SERVER}/activity`, {
        name,
        difficulty,
        duration,
        season,
        countries,
      });
  };
};