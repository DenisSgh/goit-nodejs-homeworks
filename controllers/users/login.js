const { loginUser } = require('../../model/users')

const login = async (req, res) => {
  const body = req.body

  const user = await loginUser(body)

  res.status(200).json({
    message: 'User authenticated',
    token: user.token,
    user: {
      email: user.email,
      subscription: user.subscription,
    },
  })
}

module.exports = login
