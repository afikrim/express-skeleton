const validator = require('validator')

const { sequelize, Sequelize } = require('../../db/models')
const userModel = require('../../db/models/user')

const User = userModel(sequelize, Sequelize)

exports.isEmail = email => {
  return validator.isEmail(email)
}

exports.isPassword = password => {
  return !validator.matches(
    password,
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
  )
}

exports.isEmailUnique = async email => {
  const user = await User.findOne({ where: { email } })

  return !user
}
