const { reVerifyUser } = require('../../model/users')
const { sendEmail } = require('../../utils')

const reVerify = async (req, res) => {
  const body = req.body

  const user = await reVerifyUser(body)
  sendEmail(user)

  res.status(200).json({
    message: 'Verification email sent, please verify your email',
  })
}

module.exports = reVerify
