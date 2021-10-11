const { Contact } = require('../../db')

const getContactById = async (contactId, owner) => {
  return await Contact.findOne({ _id: contactId, owner })
  // return await Contact.findById(contactId)
}

module.exports = getContactById
