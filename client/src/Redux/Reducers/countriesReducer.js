import { GET_COUNTRIES } from "../Constants/actionTypes";

const initialState = {
  countries: [],
  modifiedCountries: [],
};

const countriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COUNTRIES:
      return { ...state, countries: payload };

    default:
      return state;
  }
};

export default countriesReducer;
