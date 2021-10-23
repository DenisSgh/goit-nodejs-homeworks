const express = require('express')
const router = express.Router()

const {
  signup,
  login,
  logout,
  current,
  subscription,
  avatar,
} = require('../../controllers/users')

const {
  controllerWrapper,
  authMiddleware,
  avatarsMiddleware,
} = require('../../middlewares')

const {
  signupValidation,
  subscriptionValidation,
} = require('../../middlewares/validation')

router.post('/signup', signupValidation(), controllerWrapper(signup))

router.post('/login', signupValidation(), controllerWrapper(login))

router.use(authMiddleware)

router.post('/logout', controllerWrapper(logout))

router.get('/current', controllerWrapper(current))

router.patch('/', subscriptionValidation(), controllerWrapper(subscription))

router.patch(
  '/avatars',
  avatarsMiddleware.single('avatar'),
  controllerWrapper(avatar),
)

module.exports = router
