const { ServiceVersion } = require('../service')
const service = new ServiceVersion()

 
class VersionController {
   
   static async getAll(req, res){
      try {
         const allTypeUser = await service.getAllRegistries()
         return res.status(200).json(allTypeUser)   
      } catch (error) {
         return res.status(500).json({ message: error })
      }
   }

   static async create(req, res){
      try {
         const datas = req.body
         const newTypeUser = await service.createRegistry(datas)
         return res.status(201).json(newTypeUser)
         
      } catch (error) {
         return res.status(500).json(error.message)
      }
   }
   
   static async delete(req, res){
      try {
         const { id } = req.params
         const deletedRegistry = await service.deleteRegistry(id);
         if(deletedRegistry){
            return res.status(200).json({ message: `Versão ${id} deletado`})
         }else{
            return res.status(200).json({ message: `Nenhum informação encontrada`})
         }         
      } catch (error) {
         return res.status(500).json(error.message)
      }
   }

   static async update(req, res){
      try {
         const { id } = req.params
         const newInfo = req.body
         const updatedRegistry =  await service.updateRegistry(newInfo, Number(id));
         
         if(!updatedRegistry[0]){
            return res.status(200).json({ message: `Versão não encontrado`})   
         }

         return res.status(200).json({ message: `Versão ${id} atualizado`})
      } catch (error) {
         return res.status(500).json(error.message) 
      }
   }

   static async getVersionById(req, res){
      try {
         const { id } = req.params
         const registry = await service.getOneRegistry(Number(id))

         if(!registry){
            res.status(200).json({message: `Nenhuma versão com este id ${id}`})   
         }

         res.status(200).json(registry)
      } catch (error) {
         return res.status(500).json(error)
      }
   }

}


module.exports = VersionController