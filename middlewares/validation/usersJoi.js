const { BadRequest } = require('http-errors')
const Joi = require('joi')

const joiSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(6).required(),
  subscription: Joi.string(),
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

module.exports = {
  signupValidation,
}
