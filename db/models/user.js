module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    'user',
    {
      name: DataTypes.STRING,
      password: DataTypes.STRING,
      emailVerifiedAt: DataTypes.DATE,
    },
    {}
  )
  user.associate = function(models) {
    // associations can be defined here
  }
  return user
}
