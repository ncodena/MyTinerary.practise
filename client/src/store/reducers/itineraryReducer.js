import {REQUEST_ITINERARIES} from '../actions/itineraryAction';
import {RECEIVE_ITINERARIES} from '../actions/itineraryAction';
import {FAILURE_FETCHING_ITINERARIES} from '../actions/itineraryAction';

const initialState = {
    loading: false,
    cities: [],
    error: ''
}

export default function reducer (state = initialState, action) {
    switch(action.type) {
        case REQUEST_ITINERARIES:
            return {
               ...state,
               loading:true

            }
        case RECEIVE_ITINERARIES:
            return {
                ...state,
                loading: false,
                cities: action.itineraries,

            }
        case FAILURE_FETCHING_ITINERARIES:
            return {
                ...state,
              loading: false,
              error: action.error

            }
            default:
                return state
        
    }
}

