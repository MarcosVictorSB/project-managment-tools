const { ServiceProject } = require('../service')
const service = new ServiceProject()


class ProjectController{

   static async getAllProjects(req, res){
      try {
         const allProject = await service.getAllRegistries() 
         return res.status(200).json(allProject)   
      } catch (error) {
         return res.status(500).json(error.message)
      }      
   }
}

module.exports = ProjectController