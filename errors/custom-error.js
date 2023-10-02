class CustomAPIError extends Error {
  constructor(message) {
    super(message)
    this.statusCode = this.statusCode || 500
  }
}

module.exports = CustomAPIError
