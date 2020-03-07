const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const logger = require('morgan')

const routes = require('./routes/routes')

const app = express()

app.use(logger(process.env.NODE_ENV === 'development' ? 'dev' : 'combined'))
app.use(cors())
app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', routes)

module.exports = app
