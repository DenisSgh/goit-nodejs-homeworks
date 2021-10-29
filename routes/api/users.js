const express = require('express')
const router = express.Router()

const {
  signup,
  login,
  logout,
  current,
  subscription,
  avatar,
  verify,
  reVerify,
} = require('../../controllers/users')

const {
  controllerWrapper,
  authMiddleware,
  avatarsMiddleware,
} = require('../../middlewares')

const {
  signupValidation,
  subscriptionValidation,
  emailValidation,
} = require('../../middlewares/validation')

router.post('/signup', signupValidation(), controllerWrapper(signup))

router.post('/login', signupValidation(), controllerWrapper(login))

router.get('/verify/:verificationToken', controllerWrapper(verify))

router.post('/verify', emailValidation(), controllerWrapper(reVerify))

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
