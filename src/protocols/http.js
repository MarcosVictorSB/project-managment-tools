const HttpStatusCode = {
  Created: 201,
  Conflict: 409
}


const conflict = (error) => ({
  status: HttpStatusCode.Conflict,
  body: {
    error: error
  }
})

const created = (response) => ({
  status: HttpStatusCode.Created,
  body: {
    result: response,
  }
})

module.exports = {
  created,
  conflict
}