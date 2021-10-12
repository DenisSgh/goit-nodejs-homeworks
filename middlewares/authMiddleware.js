const jwt = require('jsonwebtoken')
const { User } = require('../db')
const { Unauthorized } = require('http-errors')

const authMiddleware = async (req, res, next) => {
  try {
    //* Checking if the token has arrived
    if (!req.headers.authorization) {
      throw Unauthorized('Not authorized')
    }

    //* Pulling the token from headers
    const [, token] = req.headers.authorization.split(' ')

    //* Checking if the token is empty
    if (!token) {
      throw Unauthorized('Not authorized')
    }

    //* Transforming the token into user and searching the user with the same id
    const user = jwt.decode(token)
    const searchedUser = await User.findById(user._id)

    //* Checking if the user is found and if the tokens are the same
    if (!searchedUser || token !== searchedUser.token) {
      throw Unauthorized('Not authorized')
    }

    //* Writing the token and user in requests
    // req.token = token
    req.user = user
  } catch (error) {
    next(error)
  }
  next()
}

module.exports = authMiddleware
