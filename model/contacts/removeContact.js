const { Contact } = require('../../db')

const removeContact = async (contactId, owner) => {
  return await Contact.findOneAndRemove({ _id: contactId, owner })
  // return await Contact.findByIdAndRemove(contactId)
}

module.exports = removeContact
