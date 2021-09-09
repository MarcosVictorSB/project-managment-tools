const app = require('../app')
const supertest = require('supertest')

const request = supertest(app)

const USER_VALID = {
   email: "marcos@marcos.com.br",
   password: 1245
}

const USER_EMAIL_WRONG = {
   email: "marcos@marcos.br.br",
   password: 1245
}

const USER_PASSWORD_WRONG = {
   email: "marcos@marcos.br.br",
   password: 1245645456
}

const USER_PASSWORD_EMAIL_WRONGS = {
   email: "marcos@marcos.br.br",
   password: 1245645456
}

describe('/Authentication ', ()=> {
   test('Deve retornar um token valido', async()=>{
      return request.post('/authentication')
         .send(USER_VALID)
         .then(res => {
            expect(res.statusCode).toBe(200)
            expect(res.body.token).toBeDefined()
            expect(res.body).toHaveProperty("token")
         })
   }) 

   test('Deve impedir de retornar um token valido por causa do email errado', async()=>{
      return request.post('/authentication')
      .send(USER_EMAIL_WRONG)
      .then(res => {
         expect(res.statusCode).toBe(401)
         expect(res.body).toEqual('Email ou senha errado')
      })
   })

   test('Deve impedir de retornar um token valido por causa do password errado', async()=>{
      return request.post('/authentication')
      .send(USER_PASSWORD_WRONG)
      .then(res => {
         expect(res.statusCode).toBe(401)
         expect(res.body).toEqual('Email ou senha errado')
      })
   })

   test('Deve impedir de retornar um token valido por causa do email e password errado', async()=>{
      return request.post('/authentication')
      .send(USER_PASSWORD_EMAIL_WRONGS)
      .then(res => {
         expect(res.statusCode).toBe(401)
         expect(res.body).toEqual('Email ou senha errado')
      })
   })

})