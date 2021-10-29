const { signupUser } = require('../../model/users')
const { sendEmail } = require('../../utils')

const signup = async (req, res) => {
  const body = req.body

  const user = await signupUser(body)
  sendEmail(user)

  res.status(201).json({
    message: 'User created, please verify your email',
    user: {
      email: user.email,
      subscription: user.subscription,
    },
  })
}

module.exports = signup
