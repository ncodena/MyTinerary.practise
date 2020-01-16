import {REQUEST_FAVOURITES} from '../actions/favouritesAction';
import {RECEIVE_FAVOURITES} from '../actions/favouritesAction';
import {FAILURE_FETCHING_FAVOURITES} from '../actions/favouritesAction';

const initialState = {
    loading: false,
    favourites: []
}

export default function reducer (state = initialState, action) {
    switch(action.type) {
        case REQUEST_FAVOURITES:
            return {
               ...state,
               loading:true
            }
        case RECEIVE_FAVOURITES:
            return {
                ...state,
                loading: false,
                favourites: action.favourites,

            }
        case FAILURE_FETCHING_FAVOURITES:
            return {
                ...state,
              loading: false,
              error: action.error
            }
            default:
                return state
    }
}