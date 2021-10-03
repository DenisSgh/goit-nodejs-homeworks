const { listContacts } = require('../../model/contacts')

const getAll = async (_, res) => {
  const contacts = await listContacts()
  res.status(200).json(contacts)
}

module.exports = getAll
