import fetch from 'cross-fetch'

const redux = require('redux')
const createStore = redux.createStore

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
        type: REQUEST_CITIES,
        
    }   
}

const receiveCities = () => {
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
              users: [],
              error: action.payload

            }
        
    }
}




export function fetchPosts(subreddit) {
    return function(dispatch){

        dispatch(requestPosts(subreddit))

        return fetch('http://localhost:5000/cities/all')
            .then(
                response => response.json(),

                error => console.log('An errorocurred, error')
            )
            .then(json =>
                dispatch(receivePosts (subreddit, json))
                )
    }
}

const store = createStore(reducer)