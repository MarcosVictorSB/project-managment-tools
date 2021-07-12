const {JWTSecret} = require('../const/jwt')
const jwt = require('jsonwebtoken')

function auth(req, res, next){
   const authToken = req.headers['authorization']
   
   if(authToken != undefined){
      const bearer = authToken.split(' ')
      const token = bearer[1]
      jwt.verify(token, JWTSecret, (error , data) => {
         if(error){            
            return res.status(401).json({message: ' Token Invalido'})
         }else{
            res.loggerUser = { id: data.id, email: data.email }
            next()
         }
      })
   }else{
      res.status(401).json({message: 'token invalido'})
   }  

  
}

module.exports = auth