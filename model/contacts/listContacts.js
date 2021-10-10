const { Contact } = require('../../db')

const listContacts = async () => {
  return await Contact.find({})
}

module.exports = listContacts
