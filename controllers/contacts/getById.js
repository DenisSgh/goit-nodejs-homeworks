const { NotFound } = require('http-errors')
const { getContactById } = require('../../model/contacts')

const getById = async (req, res) => {
  const { id } = req.params
  const { _id: owner } = req.user

  const contact = await getContactById(id, owner)

  if (!contact) {
    throw new NotFound('Not found')
  }

  res.status(200).json(contact)
}

module.exports = getById
