const { NotFound } = require('http-errors')
const { removeContact } = require('../../model/contacts')

const removeById = async (req, res) => {
  const { id } = req.params
  const { _id: owner } = req.user

  const contact = await removeContact(id, owner)

  if (!contact) {
    throw new NotFound('Not found')
  }

  res.status(200).json({
    message: 'Contact deleted',
  })
}

module.exports = removeById
