function CustomError(message) {
  this.message = message;
}

CustomError.prototype = Error.prototype;

module.exports = CustomError;
