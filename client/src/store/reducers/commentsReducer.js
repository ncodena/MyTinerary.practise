import {REQUEST_COMMENTS, RECEIVE_COMMENTS, FAILURE_FETCHING_COMMENTS} from '../actions/commentsAction';
import {RECEIVE_FAVOURITES} from '../actions/commentsAction';
import {FAILURE_FETCHING_FAVOURITES} from '../actions/commentsAction';
import {RECEIVE_USER} from '../actions/commentsAction';

const initialState = {
    loading: false,
    comments: [],
    error: '',
    user: {}
};

export default function reducer (state = initialState, action){
    switch(action.type){
        case REQUEST_COMMENTS:
            return {
                ...state,
                loading: true
            }
        case RECEIVE_COMMENTS:
            return {
                ...state,
                loading: false,
                comments: action.comments,
            }
        case RECEIVE_USER:
            return {
                ...state,
                user: action.user
            }
        case FAILURE_FETCHING_COMMENTS:
            return {
                ...state,
                loading: false,
                error: action.error
            }
            default:
                return state
    }

}