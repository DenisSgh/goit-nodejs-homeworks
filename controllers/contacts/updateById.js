const { NotFound } = require('http-errors')
const { updateContactById } = require('../../model/contacts')

const updateById = async (req, res) => {
  const { id } = req.params
  const { _id: owner } = req.user
  const body = req.body

  const contact = await updateContactById(id, owner, body)

  if (!contact) {
    throw new NotFound('Not found')
  }

  res.status(200).json({
    message: 'Contact updated',
    contact,
  })
}

module.exports = updateById
