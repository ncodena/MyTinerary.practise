export const REQUEST_COMMENTS = 'REQUEST_COMMENTS';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const FAILURE_FETCHING_COMMENTS = 'FAILURE_FETCHING_COMMENTS';


const requestComments = () => {
    return{
        type: REQUEST_COMMENTS
        
    }   
}

const receiveCities = comments => {
    return{
        type: RECEIVE_COMMENTS,
        comments,
        
    }   
}

const failureGettingComments = error => {
    return{
        type: FAILURE_FETCHING_COMMENTS,
        error
        
    }   
}