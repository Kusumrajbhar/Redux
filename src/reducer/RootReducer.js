import ChangeTheNumber from "./ChangeTheNumber"; //reducer
import displayText from "./DisplayText";
import MulDiviNumber from "./MulDivi";
import ChocolateType from "./Chocolate";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  ChangeTheNumber,
  displayText,
  MulDiviNumber,
  ChocolateType,
});

export default rootReducer;
