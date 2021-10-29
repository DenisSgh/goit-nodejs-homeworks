const { verifyUser } = require('../../model/users')

const verify = async (req, res) => {
  const { verificationToken } = req.params

  await verifyUser(verificationToken)

  res.status(200).json({
    message: 'Verification successful',
  })
}

module.exports = verify
