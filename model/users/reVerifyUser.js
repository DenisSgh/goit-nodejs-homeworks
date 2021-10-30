const { NotFound } = require('http-errors')
const { User } = require('../../db')

const verifyUser = async ({ email }) => {
  const user = await User.findOne({ email })

  if (!user) {
    throw new NotFound('User is not found')
  }

  if (user.verify) {
    throw new NotFound('Verification has already been passed')
  }

  return user
}

module.exports = verifyUser
