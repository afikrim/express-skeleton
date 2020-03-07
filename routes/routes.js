const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200)

  return res.json({
    app: {
      name: process.env.APP_NAME,
      version: process.env.APP_VERSION,
    },
  })
})

module.exports = router
