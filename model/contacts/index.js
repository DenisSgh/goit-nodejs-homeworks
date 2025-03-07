const listContacts = require('./listContacts')
const getContactById = require('./getContactById')
const addContact = require('./addContact')
const updateContactById = require('./updateContactById')
const removeContact = require('./removeContact')
const updateContactFavoriteById = require('./updateContactFavoriteById')

module.exports = {
  listContacts,
  getContactById,
  addContact,
  updateContactById,
  removeContact,
  updateContactFavoriteById,
}
