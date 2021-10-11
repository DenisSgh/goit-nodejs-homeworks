const { Conflict } = require('http-errors')
const { User } = require('../../db')
const bcrypt = require('bcrypt')

const signupUser = async ({ email, password }) => {
  const user = await User.findOne({ email })

  if (user) {
    throw new Conflict(
      'This email is already in use, please enter another email',
    )
  }

  return await User.create({ email, password: bcrypt.hashSync(password, 10) })
}

module.exports = signupUser
