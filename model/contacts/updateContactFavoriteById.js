const { Contact } = require('../../db')

const updateContactFavoriteById = async (contactId, owner, favorite) => {
  return await Contact.findOneAndUpdate({ _id: contactId, owner }, favorite, {
    new: true,
  })
  // return await Contact.findByIdAndUpdate(contactId, favorite, { new: true })
}

module.exports = updateContactFavoriteById
