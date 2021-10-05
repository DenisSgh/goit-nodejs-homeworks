const { NotFound } = require('http-errors')
const { updateContactFavoriteById } = require('../../model/contacts')

const updateFavoriteById = async (req, res) => {
  const { id } = req.params
  const body = req.body

  const contact = await updateContactFavoriteById(id, body)

  if (!contact) {
    throw new NotFound('Not found')
  }

  res.status(200).json({
    message: 'Favorite updated',
    contact,
  })
}

module.exports = updateFavoriteById
