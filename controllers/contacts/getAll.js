const { listContacts } = require('../../model/contacts')

const getAll = async (req, res) => {
  const { _id: owner } = req.user
  const { page = 1, limit = 20, favorite = null } = req.query

  const contacts = await listContacts(owner, page, limit, favorite)

  res.status(200).json({
    message: 'All contacts in contacts list',
    // contacts,
    contacts: contacts.docs,
    totalContacts: contacts.totalDocs,
  })
}

module.exports = getAll
