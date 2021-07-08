const { ServiceStatusTask } = require('../service')
const service = new ServiceStatusTask()


class StatusTaskController { 
   
   static async getAllStatusTask(req, res){
      try {
         const allRegister = await service.getAllRegistries()
         return res.status(200).json(allRegister)   
      } catch (error) {
         return res.status(500).json({ message: error })
      }
   }

   static async createNewStatusTask(req, res){
      try {
         const datas = req.body
         const newTypeUser = await service.createRegistry(datas)
         return res.status(200).json(newTypeUser)
         
      } catch (error) {
         return res.status(500).json(error.message)
      }
   }
   
   static async deleteStatusTask(req, res){
      try {
         const { id } = req.params
         const deletedRegistry = await service.deleteRegistry(id);
         if(deletedRegistry){
            return res.status(200).json({ message: `Tipo de status ${id} deletado`})
         }else{
            return res.status(200).json({ message: `Nenhum informação encontrada`})
         }         
      } catch (error) {
         return res.status(500).json(error.message)
      }
   }

   static async updateStatusTask(req, res){
      try {
         const { id } = req.params
         const newInfo = req.body
         const updatedRegistry =  await service.updateRegistry(newInfo, Number(id));
         
         if(!updatedRegistry[0]){
            return res.status(200).json({ message: `Nenhuma informção encontrada`})   
         }

         return res.status(200).json({ message: `Status ${id} atualizado`})
      } catch (error) {
         return res.status(500).json(error.message) 
      }
   }

   static async getOneStatusTask(req, res){
      try {
         const { id } = req.params
         const registry = await service.getOneRegistry(Number(id))

         if(!registry){
            res.status(200).json({message: `Nenhum status com este id ${id}`})   
         }

         res.status(200).json(registry)
      } catch (error) {
         return res.status(500).json(error)
      }
   }

}


module.exports = StatusTaskController