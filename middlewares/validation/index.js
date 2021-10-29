const { validation, favoriteValidation } = require('./contactsJoi')
const {
  signupValidation,
  subscriptionValidation,
  emailValidation,
} = require('./usersJoi')

module.exports = {
  validation,
  favoriteValidation,
  signupValidation,
  subscriptionValidation,
  emailValidation,
}
