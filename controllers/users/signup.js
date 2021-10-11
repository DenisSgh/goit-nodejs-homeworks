const { signupUser } = require('../../model/users')

const signup = async (req, res) => {
  const body = req.body

  const user = await signupUser(body)

  res.status(201).json({
    message: 'User created',
    user: {
      email: user.email,
      subscription: user.subscription,
    },
  })
}

module.exports = signup
