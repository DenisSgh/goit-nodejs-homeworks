const { Unauthorized } = require('http-errors')
const { User } = require('../../db')

const subscriptionUser = async (id, avatarURL) => {
  const user = await User.findById(id)

  if (!user) {
    throw new Unauthorized('Not authorized')
  }

  return await User.findByIdAndUpdate(id, { avatarURL }, { new: true })
}

module.exports = subscriptionUser
