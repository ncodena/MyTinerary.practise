import {USER_LOADING} from '../actions/userActions';
import {USER_LOADED} from '../actions/userActions';
import {LOGIN_FAILURE} from '../actions/userActions';

const initialState = {
    loading: false,
    currentUser: {},
    error: ''
};

export default function (state = initialState, action) {
    switch(action.type) {
        case USER_LOADING:
            return {
               ...state,
               loading: true,
            };
        case USER_LOADED:
            return {
               ...state,
               loading: false,
               currentUser: action.currentUser
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
            default:
                return state;

        };
        
}