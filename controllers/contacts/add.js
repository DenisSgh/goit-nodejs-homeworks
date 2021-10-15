const { addContact } = require('../../model/contacts')

const add = async (req, res) => {
  const body = req.body
  const { _id: owner } = req.user

  const contact = await addContact(body, owner)

  res.status(201).json({
    message: 'Contact created',
    contact: {
      id: contact._id,
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
      favorite: contact.favorite,
    },
  })
}

module.exports = add
