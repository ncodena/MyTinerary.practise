import {REQUEST_CITIES} from '../actions/cityActions';
import {RECEIVE_CITIES} from '../actions/cityActions';
import {FAILURE_FETCHING_CITIES} from '../actions/cityActions';

// const REQUEST_CITIES = 'REQUEST_CITIES'
// const RECEIVE_CITIES = 'RECEIVE_CITIES'
// const FAILURE_FETCHING_CITIES = 'FAILURE_FETCHING_CITIES '

const initialState = {
    loading: false,
    cities: [],
    error: ''
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

