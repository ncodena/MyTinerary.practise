export const USER_LOADING = 'USER_LOADING';
export const USER_LOADED = 'USER_LOADED';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const UPDATE_FAVOURITES = 'UPDATE_FAVOURITES';
export const REQUEST_FAVOURITES = 'REQUEST_FAVOURITES'

export const signUp = (newUser) => {

    console.log('estamos en el signup usersactions aun en el front end y el newuser es:', newUser)
    
    console.log(JSON.stringify(newUser))
    return async (dispatch) => {
        return await fetch('/users/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `email=${newUser.email}&password=${newUser.password}&userName=${newUser.userName}&firstName=${newUser.firstName}&lastName=${newUser.lastName}&country=${newUser.country}`,
            mode: 'no-cors'      
    }).then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => console.error(err))

    }
}

const requestUser = (id) => {
    return{
        type: USER_LOADING
    }   
}

// const receiveUser = currentUser => {
//     return{
//         type: USER_LOADED,
//         currentUser
        
//     }   
// }
const failureGettingUser = error => {
    return{
        type: LOGIN_FAILURE,
        error
    }   
}

const requestFavourites = () => {
    return{
        type: REQUEST_FAVOURITES
        
    }   
}


// const updatingFavourites = (favourites) => {
//     return{
//         type: UPDATE_FAVOURITES,

//     }
// }

export const login = (user) => {
    console.log("about to send the user to the backend with fetch", user)
    return async (dispatch) => {
        dispatch (requestUser())
        return await fetch('/auth/sign-in', {
            // user loading
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `email=${user.email}&password=${user.password}`,
            mode: 'no-cors'    
        })
        .then(res => res.json())
        .then(data => {
            // console.log("loggin the answer from the server", data)
            if (data.msg) console.log(data.msg)
            else if (data.token) {
                localStorage.setItem('token', data.token)
                dispatch ({
                    type: USER_LOADED,
                    currentUser: data.user
                })
            }
        })

        .catch(error => {
            dispatch(failureGettingUser(error.message))
        }) 
    }

}

// export const updatingFavourites = (itineraryId) => {
//     console.log("about to send the user to the backend with fetch", itineraryId)
//     return async (dispatch) => {
//         return await fetch('/auth/UpdatingFavourites/', {
//             method: 'PUT',
//             headers: {
//               'Content-Type': 'application/x-www-form-urlencoded',
//             },
//             body: JSON.stringify(id),
//             mode: 'cors',
//             favourites: itineraryId      
//     })

//     .then(res => res.json()) 
    
//     .then(data => {
//         if (data.msg) console.log(data.msg)
//             else if (data.token) {
//                 localStorage.setItem('token', data.token)
//                 dispatch ({
//                     type: UPDATE_FAVOURITES,
//                     favourites: data.favourites,
//                 })
//             }
//     })
//     .catch(err => console.error(err))

//     }
// }
export const updatingFavourites = (itineraryId) => {
    return async function (dispatch) {
        return await fetch('/auth/UpdatingFavourites/', {
            
            method: 'PUT',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                "x-auth-token": localStorage.getItem("token")
            },
            body: `favourites=${itineraryId}`,
            mode: 'cors'   
        })
            
        .then(res => res.json()) 
        .then(data => {
            console.log("favsdata", data)
        })
    }
}




