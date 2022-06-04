const HttpStatusCode = {
  Created: 201,
  Conflict: 409,
  serverError: 500
}


const conflict = (error) => ({
  status: HttpStatusCode.Conflict,
  body: { error }
})

const created = (response) => ({
  status: HttpStatusCode.Created,
  body: { result: response }
})

const serverError = (error) => ({
  staus: HttpStatusCode.serverError,
  body:{ error }
})

module.exports = {
  HttpStatusCode,
  created,
  conflict,
  serverError
}