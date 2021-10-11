const { User } = require('../../db')

const signupUser = async id => {
  return await User.findById(id)
}

module.exports = signupUser
