import {USER_LOADING} from '../actions/userActions';
import {USER_LOADED} from '../actions/userActions';
import {LOGIN_SUCCESS} from '../actions/userActions';

const initialState = {
    loading: false,
    currentUser: {}
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
               isAuthenticated: true,
               loading: false,
               currentUser: action.payload
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false,
            };
            default:
                return state;

        };
        
}