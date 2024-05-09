import { combineReducers } from "@reduxjs/toolkit";
import authenticationReducer from "./authentication/authenticationSlice";

const rootReducer = combineReducers({
  authentication: authenticationReducer,
});

export default rootReducer;
