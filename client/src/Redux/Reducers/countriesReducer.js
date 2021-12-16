import {
  GET_COUNTRIES,
  GET_CONTINENTS,
  GET_COUNTRY_BY_NAME,
  CLEAR_COUNTRY_DETAIL,
  FILTER_BY_CONTINENTS,
  SORT_COUNTRIES,
} from "../Constants/actionTypes";

const initialState = {
  countries: [],
  continents: [],
  modifiedCountries: [],
  countryDetail: [],
};

const countriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COUNTRIES:
      return { ...state, countries: payload };

    case GET_CONTINENTS:
      let allContinents = [];
      [...state.countries].forEach((c) => {
        if (!allContinents.includes(c.continents[0])) {
          allContinents.push(c.continents[0]);
        }
      });
      return { ...state, continents: allContinents };

    case GET_COUNTRY_BY_NAME:
      return { ...state, countryDetail: payload };

    case CLEAR_COUNTRY_DETAIL:
      return { ...state, countryDetail: []};

    case FILTER_BY_CONTINENTS:
      let filtered = [...state.countries].filter(
        (c) => c.continents[0] === payload
      );
      return { ...state, modifiedCountries: filtered };

    case SORT_COUNTRIES:
      let sorted = [];
      console.log("ordenando");
      switch (payload) {
        // Alfabético
        case "ascendant":
          sorted = [...state.countries].sort((objA, objB) => {
            if (objA.name > objB.name) return 1;
            if (objA.name < objB.name) return -1;
            return 0;
          });
          return { ...state, modifiedCountries: sorted };

        case "descendant":
          sorted = [...state.countries].sort((objA, objB) => {
            if (objA.name < objB.name) return 1;
            if (objA.name > objB.name) return -1;
            return 0;
          });
          return { ...state, modifiedCountries: sorted };

        // Población
        case "major":
          sorted = [...state.countries].sort((objA, objB) => {
            if (objA.population < objB.population) return 1;
            if (objA.population > objB.population) return -1;
            return 0;
          });
          return { ...state, modifiedCountries: sorted };

        case "minor":
          sorted = [...state.countries].sort((objA, objB) => {
            if (objA.population > objB.population) return 1;
            if (objA.population < objB.population) return -1;
            return 0;
          });
          return { ...state, modifiedCountries: sorted };

        default:
          return { ...state, modifiedCountries: [] };
      }

    default:
      return state;
  }
};

export default countriesReducer;
