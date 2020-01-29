import {REQUEST_COMMENTS} from '../actions/commentsAction';
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

}