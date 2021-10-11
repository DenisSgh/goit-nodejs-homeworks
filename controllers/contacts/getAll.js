const { listContacts } = require('../../model/contacts')

const getAll = async (req, res) => {
  const { _id: owner } = req.user
  const contacts = await listContacts(owner)

  res.status(200).json(contacts)
}

module.exports = getAll
