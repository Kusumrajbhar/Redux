import ChangeTheNumber from "./ChangeTheNumber"; //reducer
import displayText from "./DisplayText";
import MulDiviNumber from './MulDivi'
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  ChangeTheNumber,
  displayText,
  MulDiviNumber
});

export default rootReducer;
