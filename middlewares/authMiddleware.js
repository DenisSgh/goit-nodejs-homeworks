const jwt = require('jsonwebtoken')
const { User } = require('../db')
const { Unauthorized } = require('http-errors')

const authMiddleware = async (req, res, next) => {
  try {
    //* Проверка пришел ли токен
    if (!req.headers.authorization) {
      throw Unauthorized('Not authorized')
    }

    //* Вытягиваем токен из заголовков
    const [, token] = req.headers.authorization.split(' ')

    //* Проверка пустой ли токен
    if (!token) {
      throw Unauthorized('Not authorized')
    }

    //* Преобразуем токен в юзера и ищем пользователя с таким же id
    const user = jwt.decode(token)
    const searchedUser = await User.findById(user._id)

    //* Проверка, нашло пользователя и совпали ли токены
    if (!searchedUser || token !== searchedUser.token) {
      throw Unauthorized('Not authorized')
    }

    //* Записываем токен и юзера в реквесты
    // req.token = token
    req.user = user
  } catch (error) {
    next(error)
  }
  next()
}

module.exports = authMiddleware
