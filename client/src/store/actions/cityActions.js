export const REQUEST_CITIES = 'REQUEST_CITIES'
export const RECEIVE_CITIES = 'RECEIVE_CITIES'
export const FAILURE_FETCHING_CITIES = 'FAILURE_FETCHING_CITIES '


const requestCities = () => {
    return{
        type: REQUEST_CITIES
        
    }   
}

const receiveCities = cities => {
    return{
        type: RECEIVE_CITIES,
        cities
        
    }   
}

const failureGettingCities = error => {
    return{
        type: FAILURE_FETCHING_CITIES,
        error
        
    }   
}


// export const fetchCities = () => {
//     return function(dispatch) {
//         dispatch(requestCities())
//         fetch('http://localhost:5000/cities/all')
//         .then (response => {
//             const cities = response.data.map(city.id)
//             dispatch(receiveCities(cities))
//         })
//         .catch (error => {
//             dispatch(failureGettingCities(error.message))
//         })
//     }
// }

export function fetchCities() {
    return function (dispatch) {
        dispatch(requestCities())
        return fetch('http://localhost:5000/cities/all')
            .then(response => response.json()) 
            .then (json => {
                dispatch(receiveCities(json)) 


            })

            .catch(error => {
                dispatch(failureGettingCities(error.message))
            })
    }
}

