const express = require('express')

const router = express.Router()
const {
  getAll,
  getById,
  add,
  updateById,
  removeById,
  updateFavoriteById,
} = require('../../controllers/contacts')
const { controllerWrapper, authMiddleware } = require('../../middlewares')
const {
  contactValidation,
  favoriteValidation,
} = require('../../middlewares/validation/contacts')

router.use(authMiddleware)

router.get('/', controllerWrapper(getAll))

router.get('/:id', controllerWrapper(getById))

router.post('/', contactValidation(), controllerWrapper(add))

router.put('/:id', contactValidation(), controllerWrapper(updateById))

router.delete('/:id', controllerWrapper(removeById))

router.patch(
  '/:id/favorite',
  favoriteValidation(),
  controllerWrapper(updateFavoriteById),
)

module.exports = router
