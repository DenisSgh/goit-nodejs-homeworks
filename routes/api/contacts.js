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
  validation,
  favoriteValidation,
} = require('../../middlewares/validation')

router.use(authMiddleware)

router.get('/', controllerWrapper(getAll))

router.get('/:id', controllerWrapper(getById))

router.post('/', validation(), controllerWrapper(add))

router.put('/:id', validation(), controllerWrapper(updateById))

router.delete('/:id', controllerWrapper(removeById))

router.patch(
  '/:id/favorite',
  favoriteValidation(),
  controllerWrapper(updateFavoriteById),
)

module.exports = router
