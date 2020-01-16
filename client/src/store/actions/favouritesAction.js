export const REQUEST_FAVOURITES = 'REQUEST_FAVOURITES'
export const RECEIVE_FAVOURITES = 'RECEIVE_FAVOURITES'
export const FAILURE_FETCHING_FAVOURITES = 'FAILURE_FETCHING_FAVOURITES'

const requestFavourites = () => {
    return{
        type: REQUEST_FAVOURITES
        
    }   
}

const receiveFavourites = favourites => {
    return{
        type: RECEIVE_FAVOURITES,
        favourites
        
    }   
}

const failureGettingFavourites = error => {
    return{
        type: FAILURE_FETCHING_FAVOURITES,
        error
        
    }   
}

export function fetchingFavourites(){
    return function (dispatch) {
        dispatch(requestFavourites())
        return fetch('http://localhost:5000/favourites/all')
            .then(response => response.json()) 
            .then (json => {
                dispatch(receiveFavourites(json)) 
            })
            .catch(error => {
                dispatch(failureGettingFavourites(error.message))
            })
    }
}