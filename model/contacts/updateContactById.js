const { Contact } = require('../../db')

const updateContactById = async (contactId, body) => {
  return await Contact.findOneAndUpdate({ _id: contactId }, body, { new: true })
}

module.exports = updateContactById
