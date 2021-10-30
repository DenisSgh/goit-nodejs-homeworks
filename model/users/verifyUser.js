const { NotFound } = require('http-errors')
const { User } = require('../../db')

const verifyUser = async verifyToken => {
  const user = await User.findOne({ verifyToken: verifyToken })

  if (!user) {
    throw new NotFound('User is not found')
  }

  if (user.verify) {
    throw new NotFound('Verification has already been passed')
  }

  return await User.findByIdAndUpdate(user._id, {
    verify: true,
    verifyToken: null,
  })
}

module.exports = verifyUser
