const { Contact } = require('../../db')

const removeContact = async contactId => {
  return await Contact.findByIdAndRemove(contactId)
}

module.exports = removeContact
