const { currentUser } = require('../../model/users')

const current = async (req, res) => {
  const { _id } = req.user

  const user = await currentUser(_id)

  res.status(200).json({
    message: 'Current user',
    user: {
      email: user.email,
      subscription: user.subscription,
    },
  })
}

module.exports = current
