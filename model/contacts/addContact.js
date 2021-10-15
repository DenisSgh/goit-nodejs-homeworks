const { Contact } = require('../../db')

const addContact = async ({ name, email, phone, favorite = false }, owner) => {
  return await Contact.create({ name, email, phone, favorite, owner })
}

module.exports = addContact
