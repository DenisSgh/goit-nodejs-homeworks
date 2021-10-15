const { Unauthorized } = require('http-errors')
const { User } = require('../../db')

const signupUser = async id => {
  const user = await User.findById(id)

  if (!user) {
    throw new Unauthorized('Not authorized')
  }

  return await User.findByIdAndUpdate(id, { token: null })
}

module.exports = signupUser
