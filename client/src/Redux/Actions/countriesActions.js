import { GET_COUNTRIES } from "../Constants/actionTypes";
import  axios  from "axios";

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
