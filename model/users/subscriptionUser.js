const { Unauthorized } = require('http-errors')
const { User } = require('../../db')

const subscriptionUser = async (id, subscription) => {
  const user = await User.findById(id)

  if (!user) {
    throw new Unauthorized('Not authorized')
  }

  return await User.findByIdAndUpdate(id, { subscription }, { new: true })
}

module.exports = subscriptionUser
