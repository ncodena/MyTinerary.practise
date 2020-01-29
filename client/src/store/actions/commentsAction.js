export const REQUEST_COMMENTS = 'REQUEST_COMMENTS';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const FAILURE_FETCHING_COMMENTS = 'FAILURE_FETCHING_COMMENTS';
export const RECEIVE_USER = 'RECEIVE_USER';


const requestComments = () => {
    return{
        type: REQUEST_COMMENTS
        
    }   
}

const receiveComments = comments => {
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

const receiveUser = user => {
    return{
        type: RECEIVE_USER,
        user
    }
    
}

const fetchUser = (id) => {
    return function (dispatch){
        dispatch(receiveUser)

            let user = fetch(`http://localhost:5000/auth/getUser/${id}`)

            return user
    } 

}

export function fetchComments() {
    return function (dispatch) {
        dispatch(requestComments())
    return fetch(`http://localhost:5000/auth/${itinerary}/comments`, {
        method: 'GET',
        headers: {
            "x-auth-token": localStorage.getItem("token")
        }
    })
        .then(response => response.json())
        .then (json => {
            dispatch(
                fetchUser(user),
                receiveComments(json)
                )
        })
        .catch(error => {
            dispatch(failureGettingComments(error.message))
        })
    }
}


