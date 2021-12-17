import { GET_ACTIVITIES } from "../Constants/actionTypes";

const initialState = {
  activities: [],
};

const activitiesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ACTIVITIES:
      return { ...state, activities: payload };

    default:
      return state;
  }
};

export default activitiesReducer;
