const signUp = (newUser) => {

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

module.exports = {
    signUp: signUp
}