import { combineReducers } from "redux";
import location from "./location.js";
import breed from "./breed.js";
import animal from "./animal.js";
import theme from "./theme.js";

export default combineReducers({
  location,
  breed,
  animal,
  theme,
});
