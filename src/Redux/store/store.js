import { configureStore } from "@reduxjs/toolkit";
import combineReducer from "../reducers/index";

//Penser à mettre devtools à false avant prod.
const store = configureStore({
  reducer: combineReducer,
  devTools: true,
});

export default store;
