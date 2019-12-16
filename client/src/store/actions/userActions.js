export const USER_LOADING = 'USER_LOADING';
export const USER_LOADED = 'USER_LOADED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';


export const signUp = (newUser) => {

    console.log('estamos en el signup usersactions aun en el front end y el newuser es:', newUser)

    console.log(JSON.stringify(newUser))
    return async (dispatch) => {
        return await fetch('/users/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            //   "Accept": "application/json"
            },
            body: JSON.stringify(newUser),
            mode: 'no-cors'      
    }).then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => console.error(err))

    }
}

export const login = (user) => {
    return async (dispatch) => {
        return await fetch('/auth/sign-in', {
            // user loading
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            //   "Accept": "application/json"
            },
            body: JSON.stringify(user),
            mode: 'no-cors'    
        }).then(res => res.json())
        .then(data => {
            if (data.msg) console.log(data.msg)
            else if (data.token) {
                localStorage.setItem('token', data.token)
                dispatch ({
                    type: "USER_LOADING"
                })
            }
            
        })
    }

}



// module.exports = {
//     signUp: signUp,
//     login: login
// }