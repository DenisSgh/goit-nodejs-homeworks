const { Contact } = require('../../db')

const getContactById = async contactId => {
  return await Contact.findById(contactId)
  // return await Contact.findOne({ _id: contactId })
}

module.exports = getContactById
