const HttpStatusCode = {
  Conflict: 409
}


const conflict = (error) => ({
  status: HttpStatusCode.Conflict,
  body: {
    error: error
  }
})

module.exports = {
  conflict
}