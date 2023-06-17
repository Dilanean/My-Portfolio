import {
  DATA_FETCHING_STARTED,
  DATA_FETCHING_SUCCESS,
  DATA_FETCHING_FAIL,
} from "./actions";

const reducer = (state, { type, payload }) => {
  if (type === DATA_FETCHING_STARTED) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (type === DATA_FETCHING_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      isError: false,
      projects: payload.map((project) => project),
    };
  }

  if (type === DATA_FETCHING_FAIL) {
    return {
      ...state,
      isError: true,
      isLoading: false,
    };
  }

  return state;
};

export default reducer;
