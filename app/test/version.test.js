const app = require('../app')
const supertest = require('supertest')

const request = supertest(app)

let TOKEN = ''

const SEED_VERSIONS_DEFAULT = [
   {
   "id": 1,
   "name": "versão 0.0.1",
   "createdAt": "2021-07-12T22:25:42.000Z",
   "updatedAt": "2021-07-12T22:25:42.000Z",
   "deletedAt": null
   },
   {
   "id": 2,
   "name": "versão 0.0.2",
   "createdAt": "2021-07-12T22:25:42.000Z",
   "updatedAt": "2021-07-12T22:25:42.000Z",
   "deletedAt": null
   },
   {
   "id": 3,
   "name": "versão 0.0.3",
   "createdAt": "2021-07-12T22:25:42.000Z",
   "updatedAt": "2021-07-12T22:25:42.000Z",
   "deletedAt": null
   }
]

const USER_VALID = {
   email: 'marcos@marcos.com.br',
   password: 1245
}


describe('/Versions', ()=> {

   beforeAll(async()=> {
      return request.post('/authentication')
         .send(USER_VALID)
         .then(res => {
            /*const USER_VALID_TOKEN = {
               ...USER_VALID,
               token: `${res.body.token}`
            }*/
            TOKEN = res.body.token
         })
   })


   test('Deve retornar todas as versoes cadastradas', async()=>{
      return request.get('/versao')
         .set('Authorization', 'Bearer ' + TOKEN)
         .then(res => {
            expect(res.statusCode).toBe(200)
            expect(res.body).toEqual(SEED_VERSIONS_DEFAULT)
         })
   })
})
