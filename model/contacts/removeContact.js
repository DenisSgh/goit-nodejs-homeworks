const { Contact } = require('../../db')

const removeContact = async contactId => {
  return await Contact.findOneAndRemove({ _id: contactId })
}

module.exports = removeContact
