export const REQUEST_ITINERARIES = 'REQUEST_ITINERARIES'
export const RECEIVE_ITINERARIES = 'RECEIVE_ITINERARIES'
export const FAILURE_FETCHING_ITINERARIES = 'FAILURE_FETCHING_ITINERARIES '


const requestItineraries = () => {
    return{
        type: REQUEST_ITINERARIES
        
    }   
}

const receiveItineraries = itineraries => {
    return{
        type: RECEIVE_ITINERARIES,
        itineraries
        
    }   
}

const failureGettingItineraries = error => {
    return{
        type: FAILURE_FETCHING_ITINERARIES,
        error
        
    }   
}


export function fetchItineraries() {
    return function (dispatch) {
        dispatch(requestItineraries())
        return fetch('http://localhost:5000/itineraries/all')
            .then(response => response.json()) 
            .then (json => {
                dispatch(receiveItineraries(json)) 
            })
            .catch(error => {
                dispatch(failureGettingItineraries(error.message))
            })
    }
}

