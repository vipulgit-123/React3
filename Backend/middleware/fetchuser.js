var jwt = require('jsonwebtoken');
const JWT_Secret = '#@IamABaDBoy#BAD_BOY'

const fetchuser = (req, res,next) => {
    //Get the user from the jwt token and add id to the request object

    const token = req.header('auth-token')
    if (!token){
        res.status(401).send({error:"Please authenticate using a valid token"})
    }
    try {
        const data = jwt.verify(token, JWT_Secret)
    req.user = data.user;
    next()
    }catch (e) { res.status(401).send({error:"Please authenticate using a valid token"})
    }

}
module.exports=fetchuser;