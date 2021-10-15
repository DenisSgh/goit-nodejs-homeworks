const { Contact } = require('../../db')

const updateContactById = async (contactId, owner, body) => {
  return await Contact.findOneAndUpdate({ _id: contactId, owner }, body, {
    new: true,
  })
  // return await Contact.findByIdAndUpdate(contactId, body, { new: true })
}

module.exports = updateContactById
