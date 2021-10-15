const { Unauthorized } = require('http-errors')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { User } = require('../../db')

const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email })

  if (!user) {
    throw new Unauthorized('Email or password is wrong')
  }

  if (!bcrypt.compareSync(password, user.password)) {
    throw new Unauthorized('Email or password is wrong')
  }

  const token = jwt.sign(
    {
      _id: user._id,
    },
    process.env.JWT_SECRET,
  )
  return await User.findByIdAndUpdate(user._id, { token }, { new: true })
}

module.exports = loginUser
