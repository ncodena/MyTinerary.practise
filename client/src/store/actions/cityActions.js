const REQUEST_CITIES = 'REQUEST_CITIES'
const RECEIVE_CITIES = 'RECEIVE_CITIES'
const FAILURE_FETCHING_CITIES = 'FAILURE_FETCHING_CITIES '

const initialState = {
    loading: false,
    cities: [],
    error: ''
}


const requestCities = () => {
    return{
        type: REQUEST_CITIES
        
    }   
}

const receiveCities = cities => {
    return{
        type: RECEIVE_CITIES,
        payload: cities
        
    }   
}

const failureGettingCities = error => {
    return{
        type: FAILURE_FETCHING_CITIES,
        payload: error
        
    }   
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case REQUEST_CITIES:
            return {
               ...state,
               loading:true

            }
        case RECEIVE_CITIES:
            return {
                loading: false,
                cities: action.payload,
                error: ''

            }
        case FAILURE_FETCHING_CITIES:
            return {
              loading: false,
              cities: [],
              error: action.payload

            }
        
    }
}




export function fetchCities() {
    return function(dispatch){

        dispatch(requestCities)

        return fetch('http://localhost:5000/cities/all')
            .then(response => {
                const cities = response.data.map(city => city.id)
                dispatch(receiveCities(cities))

            })
            .catch(error => {
                dispatch(failureGettingCities(error.message))

            })
    }
}

