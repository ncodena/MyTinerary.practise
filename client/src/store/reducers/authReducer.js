import {USER_LOADING} from '../actions/userActions';
import {USER_LOADED} from '../actions/userActions';
import {LOGIN_FAILURE} from '../actions/userActions';
import {UPDATE_FAVOURITES} from '../actions/userActions';

const initialState = {
    loading: false,
    currentUser: {},
    error: '',
    favourites:[],
    isAuthenticated: null,
};

export default function authReducer (state = initialState, action) {
    switch(action.type) {
        case USER_LOADING:
            return {
               ...state,
               loading: true,
            };
        case USER_LOADED:
            return {
               ...state,
               ...action.payload,
               loading: false,
               currentUser: action.currentUser,
               isAuthenticated: true,
               favourites: action.favourites
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
                favourites:[]
            };

        case UPDATE_FAVOURITES:
            return{
                ...state,
                favourites: action.favourites,
                };

            default:
                return state;
        };      
        
}