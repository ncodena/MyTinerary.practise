import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import itineraryReducer from "./itineraryReducer";
import authReducer from "./authReducer";


const rootReducer = combineReducers({
    cities: cityReducer,
    itineraries: itineraryReducer,
    auth: authReducer
}); 


export default rootReducer