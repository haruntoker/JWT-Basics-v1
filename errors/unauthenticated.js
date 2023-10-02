const CustomAPIError = require('../errors/custom-error')
const {StatusCodes} = require('http-status-codes')

class UnauthenticatedError extends CustomAPIError {
    constructor(message) {
      super(message)
      this.StatusCode = StatusCodes.UNAUTHORIZED
    }
  }
  
  module.exports = UnauthenticatedError
  