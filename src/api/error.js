/*
    General Errors classes
*/

class MissingFieldError extends Error {
  constructor (field) {
    super(`Missing ${field} field.`)
    this.name = 'MissingFieldError'
    this.status = 400
  }
}

class NotImplementedError extends Error {
  constructor () {
    super('Not implemented.')
    this.name = 'NotImplementedError'
    this.status = 402
  }
}

class InvalidSignatureError extends Error {
  constructor () {
    super('Invalid signature. Micropayment invalid.')
    this.name = 'InvalidSignatureError'
    this.status = 400
  }
}

class NotFoundError extends Error {
  constructor (entity) {
    super(`${entity} not found.`)
    this.name = 'NotFoundError'
    this.status = 404
  }
}

module.exports = {
  MissingFieldError,
  NotImplementedError,
  InvalidSignatureError,
  NotFoundError
}
