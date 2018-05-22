import { combineReducers } from "redux";
import testBackEndReducer from "./testBackEndReducer";

export default combineReducers({
  testBackEnd: testBackEndReducer
});
