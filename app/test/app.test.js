const app = require('../app')
const supertest = require('supertest')

const request = supertest(app)


describe('Servidor', () => {
   test('A aplicação esta online', async()=> {
      return request.get('/').then(res => {
         const status = res.statusCode
         expect(status).toBe(200)
         expect(res.body.message).toEqual('A aplicação está online')         
      })
   })
})


