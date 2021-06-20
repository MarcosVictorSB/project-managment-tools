const { ServiceTypeUser } = require('../service')
const service = new ServiceTypeUser()


class TypeUsersController {
   
   static async getAllRegistries(req, res){
      try {
         const allTypeUser = await service.getAllRegistries()
         return res.status(200).json(allTypeUser)   
      } catch (error) {
         return res.status(500).json({ message: error })
      }
   }

   static async createRegistry(req, res){
      try {
         const datas = req.body
         const newTypeUser = await service.createRegistry(datas)
         return res.status(200).json(newTypeUser)
         
      } catch (error) {
         return res.status(500).json(error.message)
      }
   }
   
   static async deleteRegistry(req, res){
      try {
         const { id } = req.params
         await service.deleteRegistry(id);
         return res.status(200).json({ message: `Usuario ${id} deletado`})
      } catch (error) {
         return res.status(500).json(error.message)
      }
   }

   static async updateRegistry(req, res){
      try {
         const { id } = req.params
         const newInfo = req.body
         await service.updateRegistry(newInfo, Number(id));
         return res.status(200).json({ message: `Usuario ${id} atualizado`})
      } catch (error) {
         return res.status(500).json(error.message) 
      }
   }

   static async getOneRegistry(req, res){
      try {
         const { id } = req.params
         const result = await service.getOneRegistry(Number(id))
         res.status(200).json(result)
      } catch (error) {
         return res.status(500).json(error)
      }
   }


}


module.exports = TypeUsersController