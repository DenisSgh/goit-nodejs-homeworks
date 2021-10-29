const { BadRequest } = require('http-errors')
const Joi = require('joi')

const joiSchema = Joi.object({
  favorite: Joi.boolean().required(),
})

const favoriteValidation = () => {
  return (req, res, next) => {
    const { error } = joiSchema.validate(req.body)

    if (error) {
      throw new BadRequest('Missing field favorite')
    }
    next()
  }
}

module.exports = favoriteValidation
