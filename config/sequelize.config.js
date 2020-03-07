require('dotenv').config()

const {
  database,
  host,
  port,
  username,
  password,
  dialect,
} = require('./db.config')[process.env.DB_DRIVER]

module.exports = {
  development: {
    username,
    password,
    database,
    host,
    port,
    dialect,
  },
  test: {
    username,
    password,
    database: `${database}_test`,
    host,
    port,
    dialect,
  },
  production: {
    username,
    password,
    database,
    host,
    port,
    dialect,
  },
}
