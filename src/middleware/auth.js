const jwt = require('jsonwebtoken')
const secretKey = "MeuSegredo"
const serviceUser = require('../service/user')

function authMiddleware(role){
    return (req, res, next) => {
        const token = req.headers['authorization']

        if(!token){
            res.status(400).json({msg: "Token inválido"})
            return
        }

        jwt.verify(token, secretKey, async (err, decoded) => {
            if(err){
                res.status(400).json({ msg: "Token inválido" })
                return
            }

            
            const verify = await serviceUser.Verify(decoded.id, decoded.role) 

            if(!verify || (role && !role.includes(decoded.role))){
                res.status(401).json({ msg: "Permissão negada" })
                return
            }

            req.session = decoded
            next()
        })
    }
}

module.exports = authMiddleware