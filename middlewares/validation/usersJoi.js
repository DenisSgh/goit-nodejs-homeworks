const { BadRequest } = require('http-errors')
const Joi = require('joi')

const joiSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(6).required(),
  subscription: Joi.string().valid('starter', 'pro', 'business'),
})

const subscriptionJoiSchema = Joi.object({
  subscription: Joi.string().valid('starter', 'pro', 'business').required(),
})

const signupValidation = () => {
  return (req, res, next) => {
    const { error } = joiSchema.validate(req.body)

    if (error) {
      throw new BadRequest(error.message)
    }
    next()
  }
}

const subscriptionValidation = () => {
  return (req, res, next) => {
    const { error } = subscriptionJoiSchema.validate(req.body)

    if (error) {
      throw new BadRequest(error.message)
    }
    next()
  }
}

module.exports = {
  signupValidation,
  subscriptionValidation,
}
