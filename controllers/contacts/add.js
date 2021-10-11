const { addContact } = require('../../model/contacts')

const add = async (req, res) => {
  const body = req.body
  const { _id: owner } = req.user

  const contact = await addContact(body, owner)

  res.status(201).json({
    message: 'Contact created',
    contact,
  })
}

module.exports = add
