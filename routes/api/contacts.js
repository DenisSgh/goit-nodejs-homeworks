const express = require('express')

const router = express.Router()
const {
  getAll,
  getById,
  add,
  updateById,
  removeById,
} = require('../../controllers/contacts')
const { controllerWrapper } = require('../../middlewares')
const { validation } = require('../../middlewares/validation')

router.get('/', controllerWrapper(getAll))

router.get('/:id', controllerWrapper(getById))

router.post('/', validation(), controllerWrapper(add))

router.put('/:id', validation(), controllerWrapper(updateById))

router.delete('/:id', controllerWrapper(removeById))

module.exports = router
