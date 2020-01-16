import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import itineraryReducer from "./itineraryReducer";
import authReducer from "./authReducer";
import favouritesReducer from "./favouritesReducer"


const rootReducer = combineReducers({
    cities: cityReducer,
    itineraries: itineraryReducer,
    auth: authReducer,
    favourites: favouritesReducer

}); 


export default rootReducer