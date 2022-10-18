const jwt = require('jsonwebtoken')


const UserAuthorization= (req,res,next)=>{
    try {

        const token = req.headers.authorization.split(' ')[1]
        const decode= jwt.verify(token, 'mitu')
        req.user=decode
        next()
        

    } catch (error) {
        res.json({
            message: 'authorization failed!!!!!!'
        })
    }
}


module.exports= UserAuthorization