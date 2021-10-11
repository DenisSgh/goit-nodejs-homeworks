const { Contact } = require('../../db')

const listContacts = async owner => {
  return await Contact.find({ owner })
}

module.exports = listContacts
