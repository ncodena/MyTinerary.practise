const jwt = require("jsonwebtoken");

const key = require ('../keys').jwtSecret;

function auth (req, res, next) {
    const token = req.header('x-auth-token');

    //Check for token
    if(!token){
        res.status(401).json({msg:'No token, authorization denied'});
    }

    try{
        //Verify content
    const decoded = jwt.verify(token, key.jwtSecret);

    // Add user from payload
    req.user = decoded;
    next();

    } catch(e) {
        res.status(400).json({msg:'Token is not valid'});

    }
}

module.exports = auth;