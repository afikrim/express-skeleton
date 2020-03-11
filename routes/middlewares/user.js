const {
  isEmail,
  isPassword,
  isEmailUnique,
} = require('../../utils/validation/user')

exports.formValidation = (req, res, next) => {
  const messages = {}

  if (!req.body.name) {
    messages.name = {
      message: 'Name is required.',
    }
  }

  if (!req.body.email) {
    messages.email = {
      message: 'Email is required.',
    }
  }

  if (!req.body.password) {
    messages.password = {
      message: 'Password is required.',
    }
  }

  if (JSON.stringify(messages) === '{}') {
    return next()
  }

  res.status(400)
  return res.json({
    success: false,
    error: 'Data that you input is not valid.',
    messages,
  })
}

exports.dataValidation = (req, res, next) => {
  const messages = {}

  if (!isEmail(req.body.email)) {
    messages.email = {
      message: 'Email not match our pattern.',
    }
  }

  if (!isPassword(req.body.password)) {
    messages.password = {
      message:
        'Password must at least 8 char length, contain a lowercase, an uppercase, and a numeric',
    }
  }

  if (JSON.stringify(messages) === '{}') {
    return next()
  }

  res.status(400)
  return res.json({
    success: false,
    error: 'Data that you input is not valid.',
    messages,
  })
}

exports.databaseValidation = async (req, res, next) => {
  const messages = {}

  if (!isEmailUnique(req.body.email)) {
    messages.email = {
      message: 'Email already inused.',
    }
  }

  if (JSON.stringify(messages) === '{}') {
    return next()
  }

  res.status(400)
  return res.json({
    success: false,
    error: 'Data that you input is not valid.',
    messages,
  })
}
