const { ServiceUser } = require('../service')
const service = new ServiceUser()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWTSecret} = require('../const/jwt')

class AuthenticationController {
   
   static async authentication(req, res){
      try {
         const { email, password } = req.body         

         if(email === undefined || password === undefined){
            return res.status(401).json('Email ou senha errado')
         }

         const user = await service.existThisUserByEmail(email)
         if(!user) {
            return res.status(401).json('Email não cadastrado')
         }

         const isValidPassword = bcrypt.compareSync(password.toString(), user[0].password)     
         if(!isValidPassword){
            return res.status(401).json('Email ou senha errado')
         }            

         jwt.sign({id: user[0].id , email: user[0].email }, JWTSecret, {expiresIn: '2h'}, (error, token) => {
            if(error){
               return res.status(400).json({message: 'Falha interna'})
            }else{
               return res.status(200).json({ token: token })
            }
         })    

      } catch (error) {
         return res.status(500).json(error)
      }
   }
}


module.exports = AuthenticationController