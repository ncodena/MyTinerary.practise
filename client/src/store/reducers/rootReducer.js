import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
cons


const rootReducer = combineReducers({cities: citiesReducer}); 


export default rootReducer