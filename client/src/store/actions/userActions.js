const signUp = (newUser) => {

    const originalPassword = newUser.password

    return async (dispatch) => {
        return await fetch('/signUp', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify(newUser),
            mode: 'no-cors'      
    })
    .then(res => {
        return res.json()

    })
    .then(data => {
        if (data.msg) console.log (data.msg)
        else {
            const user = {email: data.email, password: originalPassword}
            // dispatch(login(user))
        }
    })
    .catch(err => console.error(err))

    }
}

module.exports = {
    signUp: signUp
}