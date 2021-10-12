const { subscriptionUser } = require('../../model/users')

const subscription = async (req, res) => {
  const { _id } = req.user
  const { subscription } = req.body

  const user = await subscriptionUser(_id, subscription)

  res.status(200).json({
    message: 'Subscription update',
    user: {
      email: user.email,
      subscription: user.subscription,
    },
  })
}

module.exports = subscription
