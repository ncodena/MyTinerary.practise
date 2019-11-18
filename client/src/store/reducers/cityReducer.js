import {REQUEST_CITIES} from '.actions./cityActions.js';
import {RECEIVE_CITIES} from '.actions./cityActions.js';
import {FAILURE_FETCHING_CITIES} from '.actions./cityActions.js';

const initialState = {
    loading: false,
    cities: [],
    error: ''
}

const cityReducer = (state = initialState, action) => {
    switch(action.type) {
        case REQUEST_CITIES:
            return {
               ...state,
               loading:true

            }
        case RECEIVE_CITIES:
            return {
                loading: false,
                cities: action.payload,
                error: ''

            }
        case FAILURE_FETCHING_CITIES:
            return {
              loading: false,
              cities: [],
              error: action.payload

            }
        
    }
}

export default cityReducer