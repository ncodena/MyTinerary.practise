import {REQUEST_CITIES} from '../actions/cityActions';
import {RECEIVE_CITIES} from '../actions/cityActions';
import {FAILURE_FETCHING_CITIES} from '../actions/cityActions';


const initialState = {
    loading: false,
    cities: [],
    error: '',
    city: {}
}

export default function reducer (state = initialState, action) {
    switch(action.type) {
        case REQUEST_CITIES:
            return {
               ...state,
               loading:true

            }
        case RECEIVE_CITIES:
            return {
                ...state,
                loading: false,
                cities: action.cities,

            }
        case "SELECTED_CITY":
            return {
                ...state,
                city: action.city
            }
        case FAILURE_FETCHING_CITIES:
            return {
                ...state,
              loading: false,
              error: action.error

            }
            default:
                return state
        
    }
}

