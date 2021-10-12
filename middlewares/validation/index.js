const { validation, favoriteValidation } = require('./contactsJoi')
const { signupValidation, subscriptionValidation } = require('./usersJoi')

module.exports = {
  validation,
  favoriteValidation,
  signupValidation,
  subscriptionValidation,
}
