const bcrypt = require('bcryptjs')
const { ServiceUser } = require('../service')
const service = new ServiceUser()


class UsersController {
   
   static async getAllUser(req, res){
      try {
         const allTypeUser = await service.getAllRegistries()
         return res.status(200).json(allTypeUser)   
      } catch (error) {
         return res.status(500).json({ message: error })
      }
   }

   static async createNewUser(req, res){
      try {

         const { name, email, password } = req.body

         const existUser = await service.getAllRegistries({ email: email })

         if(existUser.length != 0){
            return res.status(200).json({message: 'email em uso'})
         }

         var hash = this.createHash(password)

         const newUser = await service.
            createRegistry(
               {  
                  name: name, 
                  email: email, 
                  password: hash,
                  is_active: 1,
                  id_typeuser: 2,
               })
         return res.status(200).json(newUser)
         
      } catch (error) {
         return res.status(500).json(error.message)
      }
   }
   
   static async deleteUser(req, res){
      try {
         const { id } = req.params
         const deletedRegistry = await service.deleteRegistry(id);
         if(deletedRegistry){
            return res.status(200).json({ message: `Tipo de usuario ${id} deletado`})
         }else{
            return res.status(200).json({ message: `Nenhum informação encontrada`})
         }         
      } catch (error) {
         return res.status(500).json(error.message)
      }
   }

   static async updateUser(req, res){
      try {
         const { id } = req.params
         const newInfo = req.body         

         const newPassword = newInfo.password         
         var hash = this.createHash(newPassword)
         newInfo.password = hash

         const updatedRegistry =  await service.updateRegistry(newInfo, Number(id));
         
         if(!updatedRegistry[0]){
            return res.status(200).json({ message: `Tipo de usuario não encontrado`})   
         }

         return res.status(200).json({ message: `Usuario ${id} atualizado`})
      } catch (error) {
         return res.status(500).json(error.message) 
      }
   }

   static async getOneUser(req, res){
      try {
         const { id } = req.params
         const registry = await service.getOneRegistry(Number(id))

         if(!registry){
            res.status(200).json({message: `Nenhum usuario com este id ${id}`})   
         }

         res.status(200).json(registry)
      } catch (error) {
         return res.status(500).json(error)
      }
   }

   createHash(password){
      var salt = bcrypt.genSaltSync(10)
      return bcrypt.hashSync(password, salt)
   }



}


module.exports = UsersController