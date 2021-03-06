import {
  GET_COUNTRIES,
  GET_CONTINENTS,
  GET_COUNTRY_BY_NAME,
  GET_COUNTRY_BY_ID,
  CLEAR_COUNTRY_DETAIL,
  FILTER_BY_CONTINENTS,
  FILTER_BY_ACTIVITIES,
  SORT_COUNTRIES,
  LOAD_COUNTRIES,
} from "../Constants/actionTypes";

const initialState = {
  countries: [],
  continents: [],
  modifiedCountries: [],
  countryDetail: [],
};

const countriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // OBTENER TODOS LOS PAISES
    case GET_COUNTRIES:
      return { ...state, countries: payload };

    // OBTENER TODOS LOS CONTINENTES
    case GET_CONTINENTS:
      let allContinents = [];
      [...state.countries].forEach((c) => {
        if (!allContinents.includes(c.continents[0])) {
          allContinents.push(c.continents[0]);
        }
      });
      return { ...state, continents: allContinents };

    // OBTENER PAIS POR NOMBRE
    case GET_COUNTRY_BY_NAME:
      return { ...state, modifiedCountries: payload };

    // OBTENER PAIS POR ID
    case GET_COUNTRY_BY_ID:
      return { ...state, countryDetail: payload };

    // LIMPIAR EL DETALLE DEL PAIS
    case CLEAR_COUNTRY_DETAIL:
      return { ...state, countryDetail: [] };

    // FILTRADO POR CONTINENTES
    case FILTER_BY_CONTINENTS:
      switch (payload) {
        case "continents":
          return { ...state, modifiedCountries: [...state.countries] };

        default:
          let countriesByContinent = [...state.countries].filter(
            (c) => c.continents[0] === payload
          );
          return { ...state, modifiedCountries: countriesByContinent };
      }

    // FILTRADO POR ACTIVIDADES
    case FILTER_BY_ACTIVITIES:
      switch (payload) {
        case "activities":
          return { ...state, modifiedCountries: [...state.countries] };

        default:
          let countriesByActivity = [...state.countries].filter((c) =>
            c.activities.some((a) => a.name === payload)
          );
          return { ...state, modifiedCountries: countriesByActivity };
      }

    // ORDENAMIENTO
    case SORT_COUNTRIES:
      let sorted = [];
      switch (payload) {
        // Alfab??tico
        case "ascendant":
          sorted = [...state.modifiedCountries].sort((objA, objB) => {
            if (objA.name > objB.name) return 1;
            if (objA.name < objB.name) return -1;
            return 0;
          });
          return { ...state, modifiedCountries: sorted };

        case "descendant":
          sorted = [...state.modifiedCountries].sort((objA, objB) => {
            if (objA.name < objB.name) return 1;
            if (objA.name > objB.name) return -1;
            return 0;
          });
          return { ...state, modifiedCountries: sorted };

        // Poblaci??n
        case "major":
          sorted = [...state.modifiedCountries].sort((objA, objB) => {
            if (objA.population < objB.population) return 1;
            if (objA.population > objB.population) return -1;
            return 0;
          });
          return { ...state, modifiedCountries: sorted };

        case "minor":
          sorted = [...state.modifiedCountries].sort((objA, objB) => {
            if (objA.population > objB.population) return 1;
            if (objA.population < objB.population) return -1;
            return 0;
          });
          return { ...state, modifiedCountries: sorted };

        default:
          return { ...state, modifiedCountries: state.countries };
      }

    // CARGAR LOS PA??SES EN MODIFIEDCOUNTRIES
    case LOAD_COUNTRIES:
      return { ...state, modifiedCountries: [...state.countries] };

    // RETORNA EL ESTADO
    default:
      return { ...state, modifiedCountries: [...state.countries] };
  }
};

export default countriesReducer;
