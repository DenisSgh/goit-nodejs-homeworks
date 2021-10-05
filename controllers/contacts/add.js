const { addContact } = require('../../model/contacts')

const add = async (req, res) => {
  const body = req.body

  const contact = await addContact(body)

  res.status(201).json({
    message: 'Contact created',
    contact,
  })
}

module.exports = add
