const { BadRequest } = require('http-errors')
const Joi = require('joi')

const joiSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
})

const contactValidation = () => {
  return (req, res, next) => {
    const { error } = joiSchema.validate(req.body)

    if (error) {
      switch (req.method) {
        case 'POST':
          throw new BadRequest('Missing required name field')

        case 'PUT':
          throw new BadRequest('Missing fields')

        default:
          break
      }
    }
    next()
  }
}

module.exports = contactValidation
