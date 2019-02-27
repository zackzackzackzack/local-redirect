const express = require('express')
const app = express()

const PORT = process.env.PORT || 8080
const REDIRECT = process.env.REDIRECT || 'https://google.com'

app.use('/', (req, res) => {
  return res.redirect(`${REDIRECT}${req.originalUrl}`)
})

app.listen(PORT, () => console.info(`Listening on ${PORT}`))