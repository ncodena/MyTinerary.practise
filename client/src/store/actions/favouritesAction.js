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
    return async function (dispatch) {
        dispatch(requestFavourites())
        const user = await fetch(`/auth/user`, {
            method: "GET",
            headers: {
                "x-auth-token": localStorage.getItem("token")
            }
        })
        .then(res => res.json())
        .then( user => user);
        
        let favs = user.favourites.join(",")
        return await fetch(`/auth/favourites/all?q=${favs}`,{
            method: 'GET',  
        })
            .then(response => response.json())
            .then (json => {
                console.log(json)
                if (json.msg) console.log(json.msg)
                else dispatch(receiveFavourites(json)) 
            })   
            .catch(error => {
                dispatch(failureGettingFavourites(error.message))
            })
    }
}