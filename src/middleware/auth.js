const {JWTSecret} = require('../const/jwt')
const jwt = require('jsonwebtoken')

function auth(req, res, next){
   try {
      const authToken = req.headers['authorization']
   
      if(!authToken){
         return res.status(401).json({message: ' Token Inválido'})
      }

      const bearer = authToken.split(' ')
      const token = bearer[1]
      jwt.verify(token, JWTSecret, (error , data) => {
         if(error){            
            return res.status(401).json({message: ' Token Inválido'})
         }else{
            res.loggerUser = { id: data.id, email: data.email }
            next()
         }
      })   
   } catch (error) {
      res.status(401).json({message: 'token invalido'})  
   }  
}

module.exports = auth