const jwt = require("jsonwebtoken");

const key = require ('../keys');

function authToken (req, res, next) {
    const token = req.header('x-auth-token');
    // console.log(token)

    //Check for token
    if(!token){
        res.status(401).json({msg:'No token, authorization denied'});
    }
    console.log(token)
    try{
        //Verify content
    const decoded = jwt.verify(token, key.jwtSecret);
        console.log(decoded)
    // Add user from payload
    req.user = decoded;
    next();

    } catch(e) {
        res.status(400).json({msg:'Token is not valid'});

    }
}

module.exports = authToken;