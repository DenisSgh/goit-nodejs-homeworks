const { BadRequest } = require('http-errors')
const Joi = require('joi')

const joiSchema = Joi.object({
  subscription: Joi.string().valid('starter', 'pro', 'business').required(),
})

const subscriptionValidation = () => {
  return (req, res, next) => {
    const { error } = joiSchema.validate(req.body)

    if (error) {
      throw new BadRequest(error.message)
    }
    next()
  }
}

module.exports = subscriptionValidation
