import React, { useEffect, useReducer, useContext } from "react";
import axios from "axios";
import reducer from "../helpers/reducer";

import {
  DATA_FETCHING_STARTED,
  DATA_FETCHING_SUCCESS,
  DATA_FETCHING_FAIL,
} from "../helpers/actions";
const projects_url = "https://api.npoint.io/f4d408ff61955ff71539";

const initialState = {
  projects: [],
  isLoading: true,
  isError: false,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    (async () => {
      dispatch({ type: DATA_FETCHING_STARTED });
      try {
        const response = await axios(projects_url);
        dispatch({ type: DATA_FETCHING_SUCCESS, payload: response.data });
      } catch (error) {
        dispatch({ type: DATA_FETCHING_FAIL });
        console.log("Error");
      }
    })();
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
