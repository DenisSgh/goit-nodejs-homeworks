const { NotFound, BadRequest } = require('http-errors')
const Joi = require('joi')

const {
  listContacts,
  getContactById,
  addContact,
  updateContactById,
  removeContact,
} = require('../model/contacts/index')

const joiSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
})

const getAll = async (_, res) => {
  const contacts = await listContacts()
  res.status(200).json(contacts)
}

const getById = async (req, res) => {
  const { id } = req.params
  const contact = await getContactById(id)

  if (!contact) {
    throw new NotFound('Not found')
  }

  res.status(200).json(contact)
}

const add = async (req, res) => {
  const body = req.body
  const { error } = joiSchema.validate(body)

  if (error) {
    throw new BadRequest('Missing required name field')
  }

  const contact = await addContact(body)

  res.status(201).json({
    message: 'Contact created',
    contact,
  })
}

const updateById = async (req, res) => {
  const { id } = req.params
  const body = req.body
  const { error } = joiSchema.validate(body)

  if (error) {
    throw new BadRequest('missing fields')
  }

  const contact = await updateContactById(id, body)

  if (!contact) {
    throw new NotFound('Not found')
  }

  res.status(200).json({
    message: 'Contact updated',
    contact,
  })
}

const removeById = async (req, res) => {
  const { id } = req.params
  const contact = await removeContact(id)

  if (!contact) {
    throw new NotFound('Not found')
  }

  res.status(200).json({
    message: 'Contact deleted',
  })
}

module.exports = { getAll, getById, add, updateById, removeById }
