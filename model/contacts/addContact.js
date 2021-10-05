const { Contact } = require('../../db')

const addContact = async ({ name, email, phone, favorite = false }) => {
  return await Contact.create({ name, email, phone, favorite })
}

module.exports = addContact
