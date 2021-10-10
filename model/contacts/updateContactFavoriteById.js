const { Contact } = require('../../db')

const updateContactFavoriteById = async (contactId, body) => {
  return await Contact.findByIdAndUpdate(contactId, body, { new: true })
  // return await Contact.findOneAndUpdate({ _id: contactId }, body, { new: true })
}

module.exports = updateContactFavoriteById
