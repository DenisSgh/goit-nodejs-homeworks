const { Contact } = require('../../db')

const listContacts = async () => {
  console.log(Contact)
  return await Contact.find({})
}

module.exports = listContacts
